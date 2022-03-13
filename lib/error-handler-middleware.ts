import { CustomError } from "./custom-error"
import { NextFunction, Response, Request } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({ errors: [{ mesage: err.message }] });
}