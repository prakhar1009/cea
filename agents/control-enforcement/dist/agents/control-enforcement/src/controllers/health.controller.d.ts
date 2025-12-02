export declare class HealthController {
    check(): {
        status: string;
        service: string;
        version: string;
        timestamp: string;
    };
    ready(): {
        status: string;
        checks: {
            database: string;
            nats: string;
            redis: string;
        };
    };
}
//# sourceMappingURL=health.controller.d.ts.map