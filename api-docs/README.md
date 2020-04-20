[Vault client for node.js](README.md) › [Globals](globals.md)

# Vault client for node.js

# vault-tacular API Listing

For more information on how these classes correspond, see the
Hashicorp API docs:

https://www.vaultproject.io/api/overview.html

## Auth Methods

- [AwsAuth](classes/awsauth.md): AWS
- [TlsCertificateAuth](classes/tlscertificateauth.md): TLS Certificates
- [TokenAuth](classes/tokenauth.md): Token
- [UserPassAuth](classes/userpassauth.md): Username and Password

### Auth token fetch helpers

Supplied by importing `AuthTokenHelpers`.

- [getTokenFromFile](api-docs/globals.md#gettokenfromfile): Reads a token from a file. Useful with vault agent.
- [getTokenUsingIam](api-docs/globals.md#gettokenusingiam): Reads a token using AWS IAM

## Secrets Engines

- [Kv1SecretEngine](classes/kv1secretengine.md): Key/value v1
- [Kv2SecretEngine](classes/kv2secretengine.md): Key/value v2
- [PostgreSqlEngine](classes/postgresqlengine.md): Databases/PostgreSQL

## System Backends

- [HealthSysBackend](classes/healthsysbackend.md): `/sys/health`
- [InitSysBackend](classes/initsysbackend.md): `/sys/init`
- [RotateSysBackend](classes/rotatesysbackend.md): `/sys/rotate`
- [UnsealSysBackend](classes/unsealsysbackend.md): `/sys/unseal`
- [WrappingSysBackend](classes/wrappingsysbackend.md): `/sys/wrapping/*`
