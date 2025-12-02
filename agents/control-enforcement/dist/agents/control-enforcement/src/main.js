"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const cea_module_1 = require("./cea.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(cea_module_1.CeaModule);
    app.setGlobalPrefix('api/v1/cea');
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: {
            servers: [process.env.NATS_URL || 'nats://localhost:4222'],
            queue: process.env.NATS_QUEUE_GROUP || 'cea-workers',
        },
    });
    await app.startAllMicroservices();
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
//# sourceMappingURL=main.js.map