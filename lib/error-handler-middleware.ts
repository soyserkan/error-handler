import { CustomError } from "./custom-error"

export function ErrorHandlerMiddleware(err: any, req: any, res: any, next: any) {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({ errors: [{ message: err.message }] });
}