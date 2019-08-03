> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [UserPassAuth](userpassauth.md) /

# Class: UserPassAuth

Username and password-based auth

## Hierarchy

  * [BaseAuth](baseauth.md)

  * **UserPassAuth**

## Index

### Constructors

* [constructor](userpassauth.md#constructor)

### Methods

* [createOrUpdateUser](userpassauth.md#createorupdateuser)
* [login](userpassauth.md#login)

## Constructors

###  constructor

\+ **new UserPassAuth**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[UserPassAuth](userpassauth.md)*

*Defined in [auth-methods/UserPassAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/auth-methods/UserPassAuth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[UserPassAuth](userpassauth.md)*

## Methods

###  createOrUpdateUser

▸ **createOrUpdateUser**(`username`: string, `payload`: [IUpsertPayload](../interfaces/iuserpassauth.iupsertpayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [auth-methods/UserPassAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/auth-methods/UserPassAuth.ts#L27)*

Create or update a user.

**`link`** https://www.vaultproject.io/api/auth/userpass/index.html#create-update-user

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`payload` | [IUpsertPayload](../interfaces/iuserpassauth.iupsertpayload.md) |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  login

▸ **login**(`username`: string, `password`: string): *`Promise<IVaultResponse<ISecret>>`*

*Defined in [auth-methods/UserPassAuth.ts:49](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/auth-methods/UserPassAuth.ts#L49)*

Login with the username and password.

**`link`** https://www.vaultproject.io/api/auth/userpass/index.html#login

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *`Promise<IVaultResponse<ISecret>>`*