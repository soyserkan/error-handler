"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationError = void 0;
const custom_error_1 = require("./custom-error");
class JoiValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super("Invalid request parameters");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, JoiValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map(x => {
            return { message: x.message, field: x.path[0] };
        });
    }
}
exports.JoiValidationError = JoiValidationError;
