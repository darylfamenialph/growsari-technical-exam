## Description

A SimpleDog Facts API Sample with Authentication

Thanks to https://kinduff.github.io/dog-api/

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# watch mode
$ yarn start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ yarn test

```

## Support

API Includes

To login and get JWT Token
POST http://localhost:3005/api/user/login

To Get User Details via Token in header
GET http://localhost:3005/api/user

To Get Dog Facts with Auth
GET http://localhost:3005/api/dog-facts
