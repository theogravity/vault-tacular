> **[Vault client for node.js](README.md)**

[Globals](globals.md) /

# Vault client for node.js

### Index

#### Modules

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

#### Classes

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

#### Interfaces

* [IBaseClientConfig](interfaces/ibaseclientconfig.md)
* [IBaseLoginPayload](interfaces/ibaseloginpayload.md)
* [IClientReqParams](interfaces/iclientreqparams.md)
* [IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md)
* [ISecret](interfaces/isecret.md)
* [ISecretAuth](interfaces/isecretauth.md)
* [IVaultResponse](interfaces/ivaultresponse.md)
* [IWrapInfo](interfaces/iwrapinfo.md)

#### Type aliases

* [BaseUrl](globals.md#baseurl)
* [VaultToken](globals.md#vaulttoken)
* [VaultWarnings](globals.md#vaultwarnings)

#### Functions

* [getTokenFromFile](globals.md#gettokenfromfile)
* [getTokenUsingIam](globals.md#gettokenusingiam)

## Type aliases

###  BaseUrl

Ƭ **BaseUrl**: *string*

*Defined in [interfaces/IBaseClient.ts:39](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L39)*

Vault API base url

___

###  VaultToken

Ƭ **VaultToken**: *string*

*Defined in [interfaces/IBaseClient.ts:32](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L32)*

Authentication token to access the API

___

###  VaultWarnings

Ƭ **VaultWarnings**: *`Array<string>`*

*Defined in [interfaces/IBaseClient.ts:34](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L34)*

## Functions

###  getTokenFromFile

▸ **getTokenFromFile**(`path`: string, `cacheToken`: boolean): *`(Anonymous function)`*

*Defined in [auth-token-helpers/get-token-from-file.ts:10](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/auth-token-helpers/get-token-from-file.ts#L10)*

Read a token from a file. Useful if using the vault agent and need to read from a file sink.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to the file containing the token |
`cacheToken` | boolean | true | If true, will cache the token once read. If false, will read from the file each time the request requires a token. Default is true. |

**Returns:** *`(Anonymous function)`*

An async function that when called, will read the file for the token

___

###  getTokenUsingIam

▸ **getTokenUsingIam**(`awsAuthClient`: [AwsAuth](classes/awsauth.md), `role`: string, `opts`: [IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md)): *`(Anonymous function)`*

*Defined in [auth-token-helpers/get-token-using-iam.ts:30](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/auth-token-helpers/get-token-using-iam.ts#L30)*

Uses AWS IAM auth to get the vault token.
- Caches the token
- Will auto-refresh if the token is refresh-able

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`awsAuthClient` | [AwsAuth](classes/awsauth.md) | - | an instance of the AwsAuth client |
`role` | string | - | The vault role to get authorization for |
`opts` | [IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md) |  {} |   |

**Returns:** *`(Anonymous function)`*