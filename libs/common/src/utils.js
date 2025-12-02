"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashData = hashData;
exports.parseDuration = parseDuration;
exports.sleep = sleep;
exports.chunk = chunk;
exports.retry = retry;
const crypto_1 = require("crypto");
function hashData(data) {
    const content = typeof data === 'string' ? data : JSON.stringify(data);
    return (0, crypto_1.createHash)('sha256').update(content).digest('hex');
}
function parseDuration(duration) {
    const match = duration.match(/(\d+)\s*(days?|hours?|minutes?|seconds?)/i);
    if (!match) {
        throw new Error(`Invalid duration format: ${duration}`);
    }
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase().replace(/s$/, '');
    const multipliers = {
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
    };
    return value * (multipliers[unit] || 0);
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function chunk(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
}
async function retry(fn, options = {}) {
    const { maxAttempts = 3, delayMs = 1000, backoffMultiplier = 2 } = options;
    let lastError = null;
    let currentDelay = delayMs;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        }
        catch (error) {
            lastError = error;
            if (attempt < maxAttempts) {
                await sleep(currentDelay);
                currentDelay *= backoffMultiplier;
            }
        }
    }
    throw lastError;
}
//# sourceMappingURL=utils.js.map