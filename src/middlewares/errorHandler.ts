import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../errors/BaseError';
import { InternalServerError } from '../errors/InternalServerError';

const normalizeError = (err: Error): BaseError => {
    if (err instanceof BaseError) {
        return err;
    }

    return new InternalServerError(err);
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    // https://expressjs.com/en/guide/error-handling.html#the-default-error-handler
    if (res.headersSent) {
        return next(err);
    }

    const error = normalizeError(err);

    const statusCode = error.statusCode;
    const body = error.getBody();

    res.status(statusCode).send(body); // Fixed: httpCode -> statusCode
};
