
import { CustomError } from './custom-error';

export class JoiValidationError extends CustomError {
    statusCode = 400;
    constructor(public errors: ValidationErrorItem[]) {
        super("Invalid request parameters");
        Object.setPrototypeOf(this, JoiValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map(x => {
            return { message: x.message, field: x.path[0] };
        });
    }
}

interface ValidationErrorItem {
    message: string;
    path: Array<string | number>;
    type: string;
}