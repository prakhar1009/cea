// Compiledger CEA - Main Entry Point
// Week 1: Phase 1 Sprint 1 - Bootstrap

import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CeaModule } from './cea.module';

async function bootstrap() {
  // Create HTTP app
  const app = await NestFactory.create(CeaModule);

  // Set global prefix
  app.setGlobalPrefix('api/v1/cea');

  // Connect NATS microservice (optional - will add in Week 2)
  const enableNats = process.env.ENABLE_NATS !== 'false';
  if (enableNats) {
    try {
      app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_URL || 'nats://localhost:4222'],
          queue: process.env.NATS_QUEUE_GROUP || 'cea-workers',
        },
      });
      await app.startAllMicroservices();
      console.log('✓ NATS microservice connected');
    } catch (error) {
      console.warn('⚠ NATS connection failed - continuing without event subscriptions');
    }
  } else {
    console.log('ℹ NATS disabled - REST API only mode');
  }

  // Start HTTP server
  const port = process.env.PORT || 3003;
  await app.listen(port);

  console.log(`
╔════════════════════════════════════════════════════════════╗
║   Control Enforcement Agent (CEA)                          ║
║   Status: READY                                            ║
║   HTTP:   http://localhost:${port}                           ║
║   NATS:   ${enableNats ? 'Enabled' : 'Disabled'}                        ║
║   Phase:  1 (MVP - Deterministic Rules)                    ║
╚════════════════════════════════════════════════════════════╝
  `);
}

bootstrap().catch((err) => {
  console.error('Failed to start CEA:', err);
  process.exit(1);
});
