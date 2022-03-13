import { CustomError } from "./custom-error"

export function errorHandler(err: any, req: any, res: any, next: any) {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({ errors: [{ mesage: err.message }] });
}