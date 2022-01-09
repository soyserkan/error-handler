"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class UnauthorizedError extends custom_error_1.CustomError {
    constructor() {
        super("Unauthorized");
        this.statusCode = 401;
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Unauthorized!' }];
    }
}
exports.UnauthorizedError = UnauthorizedError;
