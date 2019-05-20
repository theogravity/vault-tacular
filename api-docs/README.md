
vault-tacular API Listing
=========================

For more information on how these classes correspond, see the Hashicorp API docs:

[https://www.vaultproject.io/api/overview.html](https://www.vaultproject.io/api/overview.html)

Auth Methods
------------

*   [AwsAuth](classes/awsauth.md): AWS
*   [TlsCertificateAuth](classes/tlscertificateauth.md): TLS Certificates
*   [TokenAuth](classes/tokenauth.md): Token
*   [UserPassAuth](classes/userpassauth.md): Username and Password

Secrets Engines
---------------

*   [Kv1SecretEngine](classes/kv1secretengine.md): Key/value v1
*   [Kv2SecretEngine](classes/kv2secretengine.md): Key/value v2
*   [PostgreSqlEngine](classes/postgresqlengine.md): Databases/PostgreSQL

System Backends
---------------

*   [HealthSysBackend](classes/healthsysbackend.md): `/sys/health`
*   [InitSysBackend](classes/initsysbackend.md): `/sys/init`
*   [RotateSysBackend](classes/rotatesysbackend.md): `/sys/rotate`
*   [UnsealSysBackend](classes/unsealsysbackend.md): `/sys/unseal`
*   [WrappingSysBackend](classes/wrappingsysbackend.md): `/sys/wrapping/*`

## Index

### Modules

* [IAwsAuth](modules/iawsauth.md)
* [IBaseDatabaseEngine](modules/ibasedatabaseengine.md)
* [IHealthSysBackend](modules/ihealthsysbackend.md)
* [IInitSysBackend](modules/iinitsysbackend.md)
* [IKv1SecretEngine](modules/ikv1secretengine.md)
* [IKv2SecretEngine](modules/ikv2secretengine.md)
* [IPostgreSqlEngine](modules/ipostgresqlengine.md)
* [ITlsCertificateAuth](modules/itlscertificateauth.md)
* [ITokenAuth](modules/itokenauth.md)
* [IUnsealSysBackend](modules/iunsealsysbackend.md)
* [IUserPassAuth](modules/iuserpassauth.md)
* [IWrappingSysBackend](modules/iwrappingsysbackend.md)

### Classes

* [AwsAuth](classes/awsauth.md)
* [BaseAuth](classes/baseauth.md)
* [BaseClient](classes/baseclient.md)
* [BaseDatabaseEngine](classes/basedatabaseengine.md)
* [BaseSecretEngine](classes/basesecretengine.md)
* [BaseSysBackend](classes/basesysbackend.md)
* [HealthSysBackend](classes/healthsysbackend.md)
* [InitSysBackend](classes/initsysbackend.md)
* [Kv1SecretEngine](classes/kv1secretengine.md)
* [Kv2SecretEngine](classes/kv2secretengine.md)
* [PostgreSqlEngine](classes/postgresqlengine.md)
* [RotateSysBackend](classes/rotatesysbackend.md)
* [TlsCertificateAuth](classes/tlscertificateauth.md)
* [TokenAuth](classes/tokenauth.md)
* [UnsealSysBackend](classes/unsealsysbackend.md)
* [UserPassAuth](classes/userpassauth.md)
* [WrappingSysBackend](classes/wrappingsysbackend.md)

### Interfaces

* [IBaseClientConfig](interfaces/ibaseclientconfig.md)
* [IBaseLoginPayload](interfaces/ibaseloginpayload.md)
* [IClientReqParams](interfaces/iclientreqparams.md)
* [ISecret](interfaces/isecret.md)
* [ISecretAuth](interfaces/isecretauth.md)
* [IVaultResponse](interfaces/ivaultresponse.md)
* [IWrapInfo](interfaces/iwrapinfo.md)

### Type aliases

* [BaseUrl](#baseurl)
* [VaultToken](#vaulttoken)
* [VaultWarnings](#vaultwarnings)

---

## Type aliases

<a id="baseurl"></a>

###  BaseUrl

**Ƭ BaseUrl**: *`string`*

*Defined in [interfaces/IBaseClient.ts:39](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L39)*

Vault API base url

___
<a id="vaulttoken"></a>

###  VaultToken

**Ƭ VaultToken**: *`string`*

*Defined in [interfaces/IBaseClient.ts:32](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L32)*

Authentication token to access the API

___
<a id="vaultwarnings"></a>

###  VaultWarnings

**Ƭ VaultWarnings**: *`Array`<`string`>*

*Defined in [interfaces/IBaseClient.ts:34](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L34)*

___

