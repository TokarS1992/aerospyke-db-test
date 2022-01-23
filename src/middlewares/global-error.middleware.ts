import {ExpressErrorMiddlewareInterface} from 'routing-controllers';

export class GlobalErrorMiddleware implements ExpressErrorMiddlewareInterface {
    public error(error: any, request: any, response: any, next: (err?: any) => any) {
        response.send({ ERROR: error });
        next();
    }
}
