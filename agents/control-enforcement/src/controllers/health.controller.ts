// Health Check Controller

import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'control-enforcement-agent',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('ready')
  ready() {
    // TODO: Check database connection, NATS connection, etc.
    return {
      status: 'ready',
      checks: {
        database: 'ok',
        nats: 'ok',
        redis: 'ok',
      },
    };
  }
}
