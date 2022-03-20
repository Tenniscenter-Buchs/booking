import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import rateLimit from 'express-rate-limit';
import pub from './routes/public';

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
                description: 'Local Integration Testing for API Version 1',
            },
            {
                url: 'https://api.staging.booking.tennis-buchs.ch/v1',
                description: 'Public Staging Testing for API Version 1',
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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());

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

app.listen(PORT, () => {
    console.log(`Now serving API on http://localhost:${PORT}`);
});
