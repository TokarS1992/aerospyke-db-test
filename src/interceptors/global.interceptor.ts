import {Action, Interceptor, InterceptorInterface} from 'routing-controllers';

@Interceptor()
export class GlobalInterceptor implements InterceptorInterface {
    public intercept(action: Action, result: any): any {
        console.log('Before intercept...', result);
        return result;
    }
}
