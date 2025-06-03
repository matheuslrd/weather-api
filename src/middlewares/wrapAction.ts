import { NextFunction, Request, RequestHandler, Response } from 'express';

export const wrapAction = (
    action: (req: Request, res: Response) => Promise<void>
): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await action(req, res);
        } catch (error) {
            next(error);
        }
    };
};