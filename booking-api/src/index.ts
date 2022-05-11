import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { dataSource, error, info } from './dataSource';
import { v1pub } from './routes';
import { v1sec } from './routes';

import dotenv from 'dotenv';

import supertokens from 'supertokens-node';
import {middleware} from 'supertokens-node/framework/express';
import Session from 'supertokens-node/recipe/session';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';

import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import { errorHandler } from 'supertokens-node/framework/express';
import { User } from './entity/User';

import expressJSDocSwagger from 'express-jsdoc-swagger';
import { AuditEntryEvent } from './entity/Audit';

if (process.env.REVIEW_APP && process.env.NODE_ENV === 'production') {
    dotenv.config({path: process.cwd() + '/.env'});
} else if (process.env.NODE_ENV !== 'production') {
    dotenv.config({path: process.cwd() + '/.env.development'});
}

const initDataSource = async () => {
    try {
        await dataSource.initialize();
    } catch(e) {
        console.error(e);
    }
};
initDataSource();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`);
        } else {
            next();
        }
    });
}

const options = {
    info: {
        version: '1.0.0',
        title: 'Booking API',
        license: {
            name: 'GPLV3',
            url: 'https://github.com/Tenniscenter-Buchs/booking',
        },
        description: 'API description',
        contact: {
            name: 'Cedric Schwyter',
            email: 'cedricschwyter@bluewin.ch',
        },
    },
    servers: [
        {
            url: 'https://api.booking.tennis-buchs.ch/{Base Path}',
            description: 'Production API server',
            variables: {
                'Base Path': {
                    default: 'v1',
                },
            },
        },
        {
            url: 'https://api.staging.booking.tennis-buchs.ch/{Base Path}',
            description: 'Staging API server',
            variables: {
                'Base Path': {
                    default: 'v1',
                },
            },
        },
        {
            url: 'https://booking-api-pr-{Pull Request}.herokuapp.com/{Base Path}',
            description: 'Pull request API server',
            variables: {
                'Pull Request': {
                    default: '0',
                    description: 'this value is assigned by the service provider, in this example `gigantic-server.com`',
                },
                'Base Path': {
                    default: 'v1',
                },
            },
        },
        {
            url: 'http://localhost:5000/{Base Path}',
            description: 'Local API server',
            variables: {
                'Base Path': {
                    default: 'v1',
                },
            },
        },
    ],
    security: {
        JWTAuth: {
            type: 'apiKey',
            scheme: 'cookie',
            name: 'test',
            in: 'sAccessToken'
        },
    },
    filesPattern: './routes/**/*.ts',
    baseDir: __dirname,
    swaggerUIPath: '/docs',
    exposeSwaggerUI: true,
    exposeApiDocs: false,
    notRequiredAsNullable: false,
};

expressJSDocSwagger(app)(options);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const connectionUri: string = process.env.SUPERTOKENS_CONNECTION_URI || '';
const apiKey: string  = process.env.SUPERTOKENS_API_KEY || '';
const PR_NUMBER = '{PR_NUMBER}';
const APP_NAME = '{APP_NAME}';

const herokuPrNumber: string = process.env.HEROKU_PR_NUMBER || '';
const herokuAppName: string = process.env.HEROKU_APP_NAME || '';
const primaryUiHost = process.env.REVIEW_APP && process.env.UI_HOST?.replace(PR_NUMBER, herokuPrNumber) || process.env.UI_HOST;
const secondaryUiHost = process.env.REVIEW_APP && process.env.UI_HOST_HEROKU?.replace(APP_NAME, herokuAppName) || process.env.UI_HOST_HEROKU;
const primaryApiHost = process.env.REVIEW_APP && process.env.API_HOST?.replace(PR_NUMBER, herokuPrNumber) || process.env.API_HOST;
const secondaryApiHost = process.env.REVIEW_APP && process.env.API_HOST_HEROKU?.replace(PR_NUMBER, herokuPrNumber) || process.env.API_HOST_HEROKU;

const uiHosts: (string)[] = [primaryUiHost, secondaryUiHost];
const apiHosts: (string)[] = [primaryApiHost, secondaryApiHost];
supertokens.init({
    framework: 'express',
    supertokens: {
        connectionURI: connectionUri,
        apiKey: apiKey
    },
    appInfo: {
        appName: 'booking-api',
        apiDomain: apiHosts[0],
        websiteDomain: uiHosts[0],
        apiBasePath: '/v1/auth',
        websiteBasePath: '/auth'
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            override: {
                emailVerificationFeature: {
                    apis: (originalImplementation) => {
                        return {
                            ...originalImplementation,
                            verifyEmailPOST: async function(input) {
                                const response = await originalImplementation.verifyEmailPOST(input);
                                if (response.status === 'OK') {
                                    const { id, email } = response.user;
                                    const user = await dataSource.getRepository(User).findOneBy({ supertokensId: id });
                                    if (user.email == email) {
                                        user.emailVerified = true;
                                    }
                                    await dataSource.getRepository(User).save(user);
                                    info({user: user, type: AuditEntryEvent.USER_EMAIL_VERIFIED});
                                }
                                return response;
                            }
                        };
                    }
                },
                functions: (originalImplementation) => {
                    return {
                        ...originalImplementation,
                        emailPasswordSignUp: async function(input) {
                            const response = await originalImplementation.emailPasswordSignUp(input);
                            if (response.status === 'OK') {
                                const user = dataSource
                                    .getRepository(User)
                                    .create({ supertokensId: response.user.id, email: response.user.email});
                                info({user: user, type: AuditEntryEvent.USER_SIGNUP_INIT});
                            } else {
                                error({detail: JSON.stringify(response), type: AuditEntryEvent.USER_SIGNUP_FAILED, user: { email: input.email}});
                            }
                            return response;
                        },
                    };
                }
            }
        }),
        Session.init({
            override: {
                functions: (originalImplementation) => {
                    return {
                        ...originalImplementation,
                        createNewSession: async function(input) {
                            const userId = input.userId;
                            const user = await dataSource.getRepository(User).findOneBy({ supertokensId: userId });
                            input.accessTokenPayload = {
                                ...input.accessTokenPayload,
                                role: user.role,
                            };
                            return originalImplementation.createNewSession(input);
                        },
                    };
                },
            },
        })
    ]
});

const windowMs: number = Number(process.env.EXPRESS_RATE_LIMIT_WINDOW_MILLISECONDS) || 1000;
const limit: number = Number(process.env.EXPRESS_RATE_LIMIT) || 5;

const limiter = rateLimit({
    windowMs: windowMs,
    max: limit,
    message: 'API rate limit hit, please try again in a short moment',
});

app.use(limiter);

app.use(cors({
    origin: [...uiHosts, ...apiHosts],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

app.use('/v1/', v1pub);

app.use(middleware());

app.use('/v1/secure/', verifySession(), v1sec);

app.get('/', (req, res)  => {
    res.redirect('/docs/');
});

app.use(errorHandler());

app.listen(PORT, () => {
    console.log(`Now serving API on http://localhost:${PORT}`);
});
