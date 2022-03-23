import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import rateLimit from 'express-rate-limit';
import pub from './routes/public';
import sec from './routes/secure';

import dotenv from "dotenv";

import supertokens from "supertokens-node";
import {middleware} from "supertokens-node/framework/express";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import { errorHandler } from "supertokens-node/framework/express";

if (process.env.REVIEW_APP && process.env.NODE_ENV === 'production') {
    dotenv.config({path: process.cwd() + "/.env"});
} else if (process.env.NODE_ENV !== 'production') {
    dotenv.config({path: process.cwd() + "/.env.development"});
}

let { Google, Github, Apple } = ThirdPartyEmailPassword;

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
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'booking.tennis-buchs.ch API Documentation | Swagger',
            version: '0.0.1',
            description:
            'This is a CRUD (CREATE, READ, UPDATE, DELETE) API application made with Express and documented with Swagger',
            license: {
                name: 'GNU General Public License v3.0',
                url: 'https://www.gnu.org/licenses/gpl-3.0.html',
            },
            contact: {
                name: 'Cedric Schwyter',
                email: 'cedricschwyter@bluewin.ch',
            },
        },
        servers: [
            {
                url: 'http://localhost:5000/v1',
                description: 'Local Testing for API Version 1',
            },
            {
                url: 'https://api.staging.booking.tennis-buchs.ch/v1',
                description: 'Staging Testing for API Version 1',
            },
            {
                url: 'https://api.booking.tennis-buchs.ch/v1',
                description: 'Production for API Version 1',
            },
        ],
    },
    apis: ['./routes/**/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const connectionUri: string = process.env.SUPERTOKENS_CONNECTION_URI || "";
const apiKey: string  = process.env.SUPERTOKENS_API_KEY || "";

const herokuPrNumber: string = process.env.HEROKU_PR_NUMBER || "";
const primaryUiHost = process.env.REVIEW_APP && process.env.UI_HOST?.replace("{PR_NUMBER}", herokuPrNumber) || process.env.UI_HOST;

let uiHosts: (string | any)[] = [primaryUiHost, process.env.UI_HOST_HEROKU];
let apiHosts: (string | any)[] = [process.env.API_HOST, process.env.API_HOST_HEROKU];

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: connectionUri,
        apiKey: apiKey
    },
    appInfo: {
        appName: "booking-api",
        apiDomain: apiHosts[0],
        websiteDomain: uiHosts[0],
        apiBasePath: "/v1/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                Google({
                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                    clientSecret: "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"
                }),
                Github({
                    clientId: "467101b197249757c71f",
                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
                }),
                Apple({
                    clientId: "4398792-io.supertokens.example.service",
                    clientSecret: {
                        keyId: "7M48Y4RYDL",
                        privateKey:
                        "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                        teamId: "YWQCXGJRJL",
                    },
                }),
            ]
        }),
        Session.init()
    ]
})

app.use(cors({
    origin: uiHosts,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

app.use(middleware());

const windowMs: any = process.env.EXPRESS_RATE_LIMIT_WINDOW_MILLISECONDS || 1000;
const limit: any = process.env.EXPRESS_RATE_LIMIT || 10;

const limiter = rateLimit({
    windowMs: windowMs,
    max: limit,
    message: 'API rate limit hit, please try again in a short moment',
});

app.use('/v1/', limiter, pub);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/v1/secure/', limiter, sec);

app.use(errorHandler())

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    return err;
});

app.listen(PORT, () => {
    console.log(`Now serving API on http://localhost:${PORT}`);
});
