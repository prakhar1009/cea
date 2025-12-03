// CEA Cache Service
// Week 4: Redis caching layer for performance optimization

import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { MetricsService } from './metrics.service';

@Injectable()
export class CacheService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(CacheService.name);
  private redis: Redis | null = null;
  private enabled: boolean = false;

  // Cache statistics
  private hits = 0;
  private misses = 0;

  // Default TTLs (in seconds)
  private readonly DEFAULT_TTL = 300; // 5 minutes
  private readonly RULE_TTL = 3600; // 1 hour
  private readonly EVALUATION_TTL = 600; // 10 minutes
  private readonly FACT_TTL = 300; // 5 minutes

  constructor(private readonly metricsService: MetricsService) {}

  async onModuleInit() {
    try {
      const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
      const enableCache = process.env.ENABLE_CACHE !== 'false';

      if (!enableCache) {
        this.logger.log('Cache disabled by configuration');
        return;
      }

      this.redis = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
        enableReadyCheck: true,
        lazyConnect: true,
      });

      await this.redis.connect();

      this.redis.on('error', (error) => {
        this.logger.error(`Redis error: ${error.message}`);
      });

      this.redis.on('reconnecting', () => {
        this.logger.warn('Redis reconnecting...');
      });

      this.enabled = true;
      this.logger.log('Cache service initialized with Redis');
      this.startMetricsReporter();
    } catch (error) {
      const err = error as Error;
      this.logger.warn(`Failed to connect to Redis: ${err.message}. Cache disabled.`);
      this.enabled = false;
    }
  }

  async onModuleDestroy() {
    if (this.redis) {
      await this.redis.quit();
    }
  }

  /**
   * Get value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    if (!this.enabled || !this.redis) {
      return null;
    }

    try {
      const value = await this.redis.get(key);
      if (value) {
        this.hits++;
        return JSON.parse(value) as T;
      } else {
        this.misses++;
        return null;
      }
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Cache get error for key ${key}: ${err.message}`);
      this.misses++;
      return null;
    }
  }

  /**
   * Set value in cache with TTL
   */
  async set(key: string, value: any, ttl?: number): Promise<void> {
    if (!this.enabled || !this.redis) {
      return;
    }

    try {
      const serialized = JSON.stringify(value);
      const cacheTtl = ttl || this.DEFAULT_TTL;
      await this.redis.setex(key, cacheTtl, serialized);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Cache set error for key ${key}: ${err.message}`);
    }
  }

  /**
   * Delete value from cache
   */
  async del(key: string): Promise<void> {
    if (!this.enabled || !this.redis) {
      return;
    }

    try {
      await this.redis.del(key);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Cache del error for key ${key}: ${err.message}`);
    }
  }

  /**
   * Delete multiple keys matching a pattern
   */
  async delPattern(pattern: string): Promise<void> {
    if (!this.enabled || !this.redis) {
      return;
    }

    try {
      const keys = await this.redis.keys(pattern);
      if (keys.length > 0) {
        await this.redis.del(...keys);
        this.logger.debug(`Deleted ${keys.length} keys matching pattern: ${pattern}`);
      }
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Cache delPattern error for pattern ${pattern}: ${err.message}`);
    }
  }

  /**
   * Check if key exists
   */
  async exists(key: string): Promise<boolean> {
    if (!this.enabled || !this.redis) {
      return false;
    }

    try {
      const result = await this.redis.exists(key);
      return result === 1;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get or set value with loader function
   */
  async getOrSet<T>(
    key: string,
    loader: () => Promise<T>,
    ttl?: number,
  ): Promise<T> {
    // Try to get from cache
    const cached = await this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    // Load value
    const value = await loader();

    // Store in cache
    await this.set(key, value, ttl);

    return value;
  }

  /**
   * Cache rule by ID
   */
  async cacheRule(ruleId: string, rule: any): Promise<void> {
    const key = this.buildKey('rule', ruleId);
    await this.set(key, rule, this.RULE_TTL);
  }

  /**
   * Get cached rule
   */
  async getCachedRule(ruleId: string): Promise<any | null> {
    const key = this.buildKey('rule', ruleId);
    return this.get(key);
  }

  /**
   * Cache evaluation result
   */
  async cacheEvaluation(
    controlId: string,
    factsHash: string,
    result: any,
  ): Promise<void> {
    const key = this.buildKey('eval', controlId, factsHash);
    await this.set(key, result, this.EVALUATION_TTL);
  }

  /**
   * Get cached evaluation result
   */
  async getCachedEvaluation(
    controlId: string,
    factsHash: string,
  ): Promise<any | null> {
    const key = this.buildKey('eval', controlId, factsHash);
    return this.get(key);
  }

  /**
   * Invalidate evaluation cache for control
   */
  async invalidateEvaluations(controlId: string): Promise<void> {
    const pattern = this.buildKey('eval', controlId, '*');
    await this.delPattern(pattern);
  }

  /**
   * Cache facts for project
   */
  async cacheFacts(projectId: string, facts: any): Promise<void> {
    const key = this.buildKey('facts', projectId);
    await this.set(key, facts, this.FACT_TTL);
  }

  /**
   * Get cached facts
   */
  async getCachedFacts(projectId: string): Promise<any | null> {
    const key = this.buildKey('facts', projectId);
    return this.get(key);
  }

  /**
   * Invalidate facts cache for project
   */
  async invalidateFacts(projectId: string): Promise<void> {
    const key = this.buildKey('facts', projectId);
    await this.del(key);
  }

  /**
   * Get cache statistics
   */
  getStats() {
    const total = this.hits + this.misses;
    const hitRate = total > 0 ? (this.hits / total) * 100 : 0;

    return {
      enabled: this.enabled,
      hits: this.hits,
      misses: this.misses,
      total,
      hitRate: hitRate.toFixed(2),
    };
  }

  /**
   * Reset cache statistics
   */
  resetStats() {
    this.hits = 0;
    this.misses = 0;
  }

  /**
   * Build cache key
   */
  private buildKey(...parts: string[]): string {
    return `cea:${parts.join(':')}`;
  }

  /**
   * Report metrics periodically
   */
  private startMetricsReporter() {
    setInterval(() => {
      const stats = this.getStats();
      if (stats.total > 0) {
        this.metricsService.setCacheHitRate('redis', parseFloat(stats.hitRate));
      }
    }, 30000); // Report every 30 seconds
  }
}
