# vault-tacular

[![npm version](https://badge.fury.io/js/vault-tacular.svg)](https://badge.fury.io/js/vault-tacular) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A client for Hashicorp Vault written in Typescript.

- [API Docs](api-docs)
- [CircleCI Status](https://circleci.com/gh/theogravity/vault-tacular)

## Features

- API is well-documented, doc comments sourced from
  [Vault API](https://www.vaultproject.io/api) and
  [vault-ruby](https://github.com/hashicorp/vault-ruby)
- Very straightforward and flexible API
- Custom token auth loading strategies (eg renew a token without
  creating a new client)
- Integration tests (WIP)

[TOC]: #

# Table of Contents
- [Features](#features)
- [API Support](#api-support)
- [Installation](#installation)
    - [If you are using `AwsAuth` / `getTokenUsingIam`](#if-you-are-using-awsauth--gettokenusingiam)
- [Usage](#usage)
- [Auth / Secret Engines](#auth--secret-engines)
- [System Backends](#system-backends)
- [Reading tokens](#reading-tokens)
    - [Basic token read example](#basic-token-read-example)
    - [Token read helpers](#token-read-helpers)
- [Examples](#examples)
    - [Init vault](#init-vault)
    - [Create a user using the username/password auth engine](#create-a-user-using-the-usernamepassword-auth-engine)
    - [Create / Read a secret](#create--read-a-secret)
- [Troubleshooting](#troubleshooting)
    - [Unsure if the API is working or not](#unsure-if-the-api-is-working-or-not)


## API Support

(Note: A lot of these items have not been fully tested! Please open an
issue or PR if you find any problems with an existing implementation.)

#### Auth methods

- AWS (partial)
- TLS Certificates (partial)
- Username & Password (partial)
- Token (full)

#### Secrets Engines

- PostgreSQL (full)
- Key/Value v1 and 2 (full)

#### System Backends

- Health (full)
- Init (full)
- Rotate (full)
- Unseal (full)
- Wrapping (full)

## Installation

`$ npm i vault-tacular`

Some engines might use provider-specific libraries, which are not installed
by default (if you use TLS auth, why would you need AWS-based auth
and its dependencies?).

Required dependencies for certain engines are listed below.

### If you are using `AwsAuth` / `getTokenUsingIam`

```
$ npm i awscred aws4
```

## Usage

See the [API Docs](api-docs/) for more info

## Auth / Secret Engines

You can initialize auth or secret engines with the following signature:

`new <Auth/Engine class>(baseUrl, config)`

- `baseUrl`: Vault API URL, including the version (ex:
  `http://localhost:8200/v1)`
- `config` object:

```
  /**
   * Auth method mount point
   */
  mount?: string
  /**
   * Namespace path (Vault Enterprise feature)
   * @link https://www.vaultproject.io/docs/enterprise/namespaces/index.html
   */
  namespace?: string
  /**
   * Additional request module options
   * @link https://www.npmjs.com/package/request
   */
  reqOpts?: RequestPromiseOptions
  /**
   * The token value, or an (async) function that returns the token used for the
   * Authorization / X-Vault-Token header. The client does *not* cache the result;
   * the function should implement caching and renewal of the token if necessary.
   */
  authToken?: string | Function
```

## System Backends

The signature for a backend is:

`new <SysBackend>(baseUrl, authToken?)`

## Reading tokens

The vault clients generally require an auth token to perform various actions.

The client may accept an `authToken` parameter, which can be a token
string itself (useful for testing), or a callback function that the client would
execute before vault requests to fetch the token.

### Basic token read example

```javascript
import { UserPassAuth } from 'vault-tacular'

const auth = new UserPassAuth('http://localhost:8200/v1', {
  authToken: 'my-token'
})
```

```javascript
import { UserPassAuth } from 'vault-tacular'

const auth = new UserPassAuth('http://localhost:8200/v1', {
  // callback function
  authToken: async () => {
    return 'my-token'
  }
})
```

### Token read helpers

`vault-tacular` provides some helpers for common use-cases.

#### Read a token from a file

```javascript
import { UserPassAuth, AuthTokenHelpers } from 'vault-tacular'

const auth = new UserPassAuth('http://localhost:8200/v1', {
  // getTokenFromFile returns a function that when executes,
  // reads the current value from '/tmp/token'
  authToken: AuthTokenHelpers.getTokenFromFile('/tmp/token')
})
```

#### Read a token using AWS IAM

```javascript
import { Kv1SecretEngine, AuthTokenHelpers } from 'vault-tacular'

const VAULT_API_URL = 'http://localhost:8200/v1'
const auth = new AwsAuth(VAULT_API_URL)

const secrets = new Kv1SecretEngine(VAULT_API_URL, {
  authToken: AuthTokenHelpers.getTokenUsingIam(auth, 'iam-role')
})
```

## Examples

You can see additional usage examples in the integration tests for the
client you are interested in using if it is available.

For example, the `UserPassAuth.ts` file has a corresponding
`__tests__/UserPassAuth.int-test.ts` file.

### Init vault

```javascript
import { InitSysBackend } from 'vault-tacular'

const initBackend = new InitSysBackend('http://localhost:8200/v1')

async function InitVault () {
  return initBackend.startInit({
    secret_shares: 1,
    secret_threshold: 1
  })
}
```

### Create a user using the username/password auth engine

```javascript
import { UserPassAuth } from 'vault-tacular'

const auth = new UserPassAuth('http://localhost:8200/v1', {
  authToken: () => {
    return '...'
  }
})

async function createUser () {
  const username = 'test-user'
  const password = 'test-pass'

  await auth.createOrUpdateUser(username, {
    password
  })

  return {
    username,
    password
  }
}
```

### Create / Read a secret

```javascript
import {
  UserPassAuth,
  Kv1SecretEngine
} from 'vault-tacular'

const VAULT_API_URL = 'http://localhost:8200/v1'

async function create () {
  const username = 'test-user'
  const password = 'test-pass'

  const auth = new UserPassAuth(VAULT_API_URL, {
    authToken: () => {
      // you will need to return a token that has the ability to
      // create users
      return '...'
    }
  })

  // create a new user
  await auth.createOrUpdateUser(username, {
    password
  })

  // Generate the function that will fetch and return the user's token
  const authToken = async () => {
    const user = await auth.login(username, password)

    return user.result.auth.client_token
  }

  // Create an instance of the kv secret engine
  const secrets = new Kv1SecretEngine(VAULT_API_URL, {
    authToken
  })

  // Write a secret
  await secrets.createOrUpdateSecret('test-path', {
    test: 123,
    test2: 'abc'
  })

  // Read the secret back
  const rslt = await secrets.readSecret('test-path')

  console.log(rslt.result)
}
```

## Troubleshooting

### Unsure if the API is working or not

This library uses `request` and `request-promise-native` under the hood.

You can debug API calls by adding `NODE_DEBUG=request` to your
node command:

`$ NODE_DEBUG=request npm run app`
