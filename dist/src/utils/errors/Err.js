"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = void 0;
class Err extends Error {
    constructor(message) {
        super(message);
    }
    setStatus(code) {
        this.status = code;
    }
}
exports.Err = Err;
