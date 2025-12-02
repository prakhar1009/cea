"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criticality = exports.ControlStatus = void 0;
var ControlStatus;
(function (ControlStatus) {
    ControlStatus["PASS"] = "PASS";
    ControlStatus["FAIL"] = "FAIL";
    ControlStatus["MANUAL"] = "MANUAL";
    ControlStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    ControlStatus["NOT_EVALUATED"] = "NOT_EVALUATED";
})(ControlStatus || (exports.ControlStatus = ControlStatus = {}));
var Criticality;
(function (Criticality) {
    Criticality["LOW"] = "LOW";
    Criticality["MEDIUM"] = "MEDIUM";
    Criticality["HIGH"] = "HIGH";
    Criticality["CRITICAL"] = "CRITICAL";
})(Criticality || (exports.Criticality = Criticality = {}));
//# sourceMappingURL=control.types.js.map