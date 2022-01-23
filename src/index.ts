import express, { Express } from 'express';
import dotenv from 'dotenv';
import {useExpressServer} from 'routing-controllers';
import {create} from 'express-handlebars';
import {start} from "./db/db.connection";
import httpContext from 'express-http-context';
import bodyParser from 'body-parser';
import * as controllers from './controllers';
import * as middlewares from './middlewares';
import * as interceptors from './interceptors';
import {expressServerOptions} from './server.config';

dotenv.config();

(async () => {
    await start(() => {
        const defaultPort = 3001;
        const expressApp = express();

        const app = useExpressServer<Express>(expressApp, {
            ...expressServerOptions,
            controllers: [
                controllers.TemplateControllerTmp,
                controllers.UserControllerTmp,
                controllers.UserControllerJson,
            ],
            middlewares: [
                middlewares.LogBeforeMiddleware,
                middlewares.LogAfterMiddleware,
                middlewares.GlobalErrorMiddleware,
            ],
            interceptors: [
                interceptors.GlobalInterceptor,
            ],
        });

        const expressHbs = create({
            defaultLayout: 'main',
            extname: 'hbs'
        });

        app.engine('hbs', expressHbs.engine);
        app.set('view engine', 'hbs');
        app.set('views', 'views');

        app.use(bodyParser.json());
        app.use(httpContext.middleware);
        app.use(express.urlencoded({extended: true}));

        const port = process.env.PORT || defaultPort;
        app.listen(port, () => console.log(`Running on port ${port}`));
    });
})();

