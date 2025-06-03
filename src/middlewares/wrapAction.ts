import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

interface TypedRequest<
    TBody = unknown,
    TParams extends ParamsDictionary = ParamsDictionary,
    TQuery extends ParsedQs = ParsedQs
> extends Request<TParams, unknown, TBody, TQuery> {
    body: TBody;
    params: TParams;
    query: TQuery;
}

export const wrapAction = <
    TBody = unknown,
    TParams extends ParamsDictionary = ParamsDictionary,
    TQuery extends ParsedQs = ParsedQs
>(
    action: (req: TypedRequest<TBody, TParams, TQuery>, res: Response) => Promise<void>
): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await action(req as TypedRequest<TBody, TParams, TQuery>, res);
        } catch (error) {
            next(error);
        }
    };
};
