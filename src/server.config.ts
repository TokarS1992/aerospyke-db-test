import {RoutingControllersOptions} from 'routing-controllers';

export const expressServerOptions: RoutingControllersOptions = {
	defaultErrorHandler: false,
	// defaults: {
	// 	undefinedResultCode: 204,
	// },
	validation: false,
	classTransformer: true,
}
