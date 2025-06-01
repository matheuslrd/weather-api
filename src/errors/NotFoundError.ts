import { BaseError } from './BaseError';

export class NotFoundError extends BaseError {
    constructor(resource: Error) {
        super(404, `notFound.${resource}`, 'Não encontrado');
    }
}
