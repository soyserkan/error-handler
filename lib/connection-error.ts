import { CustomError } from "./custom-error";

export class ConnectionError extends CustomError {
    statusCode = 500;
    constructor(public reason: string = "Connection Error!") {
        super(reason);
        Object.setPrototypeOf(this, ConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }]
    }
}