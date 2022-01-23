import {Action, Interceptor, InterceptorInterface} from 'routing-controllers';

@Interceptor()
export class GlobalInterceptor implements InterceptorInterface {
    public intercept(action: Action, result: any): any {
        console.log('change response...', result);
        return result;
    }
}
