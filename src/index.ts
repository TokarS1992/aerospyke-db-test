import express, { Express } from 'express';
import dotenv from 'dotenv';
import { useExpressServer } from 'routing-controllers';
import httpContext from 'express-http-context';
import * as controllers from './controllers';
import * as middlewares from './middlewares';
import * as interceptors from './interceptors';
import bodyParser from 'body-parser';

dotenv.config();
const defaultPort = 5001;
const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);
useExpressServer(app, {
    controllers: [
        controllers.UserController,
    ],
    middlewares: [
        middlewares.LogBeforeMiddleware,
        middlewares.LogAfterMiddleware,
        middlewares.GlobalErrorMiddleware,
    ],
    interceptors: [
        interceptors.MainInterceptor,
    ],
    defaultErrorHandler: false,
});
const port = process.env.PORT || defaultPort;

app.listen(port, () => console.log(`Running on port ${port}`));
