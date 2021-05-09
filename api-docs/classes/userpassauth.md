[Vault client for node.js](../README.md) › [Globals](../globals.md) › [UserPassAuth](userpassauth.md)

# Class: UserPassAuth

Username and password-based auth

## Hierarchy

  ↳ [BaseAuth](baseauth.md)

  ↳ **UserPassAuth**

## Index

### Constructors

* [constructor](userpassauth.md#constructor)

### Methods

* [createOrUpdateUser](userpassauth.md#createorupdateuser)
* [login](userpassauth.md#login)

## Constructors

###  constructor

\+ **new UserPassAuth**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[UserPassAuth](userpassauth.md)*

*Overrides void*

*Defined in [auth-methods/UserPassAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/UserPassAuth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[UserPassAuth](userpassauth.md)*

## Methods

###  createOrUpdateUser

▸ **createOrUpdateUser**(`username`: string, `payload`: [IUpsertPayload](../globals.md#iupsertpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/UserPassAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/UserPassAuth.ts#L27)*

Create or update a user.

**`link`** https://www.vaultproject.io/api/auth/userpass/index.html#create-update-user

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`payload` | [IUpsertPayload](../globals.md#iupsertpayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  login

▸ **login**(`username`: string, `password`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/UserPassAuth.ts:49](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/UserPassAuth.ts#L49)*

Login with the username and password.

**`link`** https://www.vaultproject.io/api/auth/userpass/index.html#login

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*
