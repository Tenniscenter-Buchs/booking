| master       | develop   |
|--------------|-----------|
| [![api-unit](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/api-unit.yml/badge.svg?branch=master)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/api-unit.yml) | [![api-unit](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/api-unit.yml/badge.svg?branch=develop)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/api-unit.yml) |
| [![ui-unit](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-unit.yml/badge.svg?branch=master)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-unit.yml) | [![ui-unit](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-unit.yml/badge.svg?branch=develop)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-unit.yml) |
| [![ui-e2e](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-e2e.yml/badge.svg?branch=master)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-e2e.yml) | [![ui-e2e](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-e2e.yml/badge.svg?branch=develop)](https://github.com/Tenniscenter-Buchs/booking/actions/workflows/ui-e2e.yml) |

# booking
the monorepo behind tenniscenter buchs' new booking system

## important integrations
Heroku Staging API: [https://dashboard.heroku.com/apps/booking-staging-api](https://dashboard.heroku.com/apps/booking-staging-api)

Heroku Staging UI: [https://dashboard.heroku.com/apps/booking-staging-ui](https://dashboard.heroku.com/apps/booking-staging-ui)

Heroku Production API: [https://dashboard.heroku.com/apps/booking-production-api](https://dashboard.heroku.com/apps/booking-production-api)

Heroku Production UI: [https://dashboard.heroku.com/apps/booking-production-ui](https://dashboard.heroku.com/apps/booking-production-ui)

CodeQL: [https://lgtm.com/projects/g/Tenniscenter-Buchs/booking](https://lgtm.com/projects/g/Tenniscenter-Buchs/booking)

Nx Cloud: [https://nx.app/orgs/62338708a53baf0005fdf1d6/workspaces/62339a1557b4bc282e8ce8ef?withoutBranch=true](https://nx.app/orgs/62338708a53baf0005fdf1d6/workspaces/62339a1557b4bc282e8ce8ef?withoutBranch=true)

GitGuardian: [https://dashboard.gitguardian.com](https://dashboard.gitguardian.com)

Cloudflare: [https://dash.cloudflare.com](https://dash.cloudflare.com)

## running locally
you can run both the api and the user interface locally by cloning the repository, installing the dependencies and building/running the production/development setup:

### dependencies
```bash
git clone https://github.com/Tenniscenter-Buchs/booking
cd booking
npm i
```

### running the development setup
```bash
npm run dev
```

### running the production setup
```bash
npm run build
npm start
```

the user interface will in both setups be available at [http://localhost:3000](http://localhost:3000) and the api is reachable on [http://localhost:5000](http://localhost:5000).
## note
please note that for the time being there is no local development database setup. in order to make productive use of anything database related you must setup a local postgres scheme and run the setup with the DATABASE_URL environment variable set to the corresponding postgres connection string.
