import { path } from 'ramda';
import errorCodes from '../constants/httpStatusCodes.json';

export class BaseError extends Error {
    statusCode: number;
    errorCode: string | undefined;

    constructor(statusCode: number, errorPath: string, message: string) {
        super(message);

        this.statusCode = statusCode;
        this.errorCode = path(errorPath.split('.'), errorCodes);
    }

    getBody() {
        return {
            message: this.message,
            errorCode: this.errorCode
        };
    }
}
