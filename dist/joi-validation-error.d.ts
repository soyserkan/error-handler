import { CustomError } from './custom-error';
export declare class JoiValidationError extends CustomError {
    errors: ValidationErrorItem[];
    statusCode: number;
    constructor(errors: ValidationErrorItem[]);
    serializeErrors(): {
        message: string;
        field: string | number;
    }[];
}
interface ValidationErrorItem {
    message: string;
    path: Array<string | number>;
    type: string;
}
export {};
