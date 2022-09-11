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
$ yarn start:prod
```

## Running app in Docker

```bash
# Building in x86 processors
$ yarn docker-build

# Building in Apple M1 chip
$ yarn docker-buildx

# Run Docker app
$yarn docker-run

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
