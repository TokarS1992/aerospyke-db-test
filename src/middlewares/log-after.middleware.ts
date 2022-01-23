import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'after'})
export class LogAfterMiddleware implements ExpressMiddlewareInterface {
    public use(request: any, response: any, next: (err?: any) => any): any {
        console.log('After middleware...');
        next();
    }
}
