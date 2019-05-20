# vault-tacular API Listing

For more information on how these classes correspond, see the
Hashicorp API docs:

https://www.vaultproject.io/api/overview.html

## Auth Methods

- [AwsAuth](classes/awsauth.md): AWS
- [TlsCertificateAuth](classes/tlscertificateauth.md): TLS Certificates
- [TokenAuth](classes/tokenauth.md): Token
- [UserPassAuth](classes/userpassauth.md): Username and Password

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
