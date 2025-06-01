import { NextFunction, Request, RequestHandler, Response } from 'express';

// ✅ CORRETO - usando RequestHandler
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