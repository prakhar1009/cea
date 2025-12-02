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

  // Connect NATS microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL || 'nats://localhost:4222'],
      queue: process.env.NATS_QUEUE_GROUP || 'cea-workers',
    },
  });

  // Start all microservices
  await app.startAllMicroservices();

  // Start HTTP server
  const port = process.env.PORT || 3003;
  await app.listen(port);

  console.log(`
╔════════════════════════════════════════════════════════════╗
║   Control Enforcement Agent (CEA)                          ║
║   Status: READY                                            ║
║   HTTP:   http://localhost:${port}                           ║
║   NATS:   ${process.env.NATS_URL || 'nats://localhost:4222'}
║   Phase:  1 (MVP - Deterministic Rules)                    ║
╚════════════════════════════════════════════════════════════╝
  `);
}

bootstrap().catch((err) => {
  console.error('Failed to start CEA:', err);
  process.exit(1);
});
