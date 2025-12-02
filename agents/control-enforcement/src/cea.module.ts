// Compiledger CEA - Root Module
// Week 1: Phase 1 Sprint 1

import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class CeaModule {}
