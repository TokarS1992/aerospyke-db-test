import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before'})
export class LogBeforeMiddleware implements ExpressMiddlewareInterface {
    public use(request: any, response: any, next: (err?: any) => any): any {
        console.log('Before middleware...');
        next();
    }
}
