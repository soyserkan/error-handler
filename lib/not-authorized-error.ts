import { CustomError } from "./custom-error";

export class UnauthorizedError extends CustomError {
    statusCode = 401;
    constructor(public reason: string = "Unauthorized!") {
        super(reason);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }]
    }
}