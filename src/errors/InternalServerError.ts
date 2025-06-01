import Pino from 'pino';
import { BaseError } from './BaseError';

export class InternalServerError extends BaseError {
    constructor(err: Error) {
        super(500, `notFound.${err}`, 'Não encontrado');
        const logger = Pino();

        logger.error({
            message: err.message,
            stackTrace: err.stack,
            level: 'fatal'
        });
    }
}
