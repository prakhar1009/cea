import { OnModuleInit } from '@nestjs/common';
import { RuleEngineService } from './services/rule-engine.service';
export declare class CeaModule implements OnModuleInit {
    private readonly ruleEngine;
    private readonly logger;
    constructor(ruleEngine: RuleEngineService);
    onModuleInit(): Promise<void>;
}
//# sourceMappingURL=cea.module.d.ts.map