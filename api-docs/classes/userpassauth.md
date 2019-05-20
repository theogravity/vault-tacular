[Vault client for node.js](../README.md) > [UserPassAuth](../classes/userpassauth.md)

# Class: UserPassAuth

Username and password-based auth

## Hierarchy

↳  [BaseAuth](baseauth.md)

**↳ UserPassAuth**

## Index

### Constructors

* [constructor](userpassauth.md#constructor)

### Methods

* [createOrUpdateUser](userpassauth.md#createorupdateuser)
* [login](userpassauth.md#login)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UserPassAuth**(baseUrl: *[BaseUrl](../#baseurl)*, config?: *[IBaseClientConfig](../interfaces/ibaseclientconfig.md)*): [UserPassAuth](userpassauth.md)

*Defined in [auth-methods/UserPassAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/auth-methods/UserPassAuth.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |
| `Optional` config | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** [UserPassAuth](userpassauth.md)

___

## Methods

<a id="createorupdateuser"></a>

###  createOrUpdateUser

▸ **createOrUpdateUser**(username: *`string`*, payload: *[IUpsertPayload](../interfaces/iuserpassauth.iupsertpayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [auth-methods/UserPassAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/auth-methods/UserPassAuth.ts#L27)*

Create or update a user.

*__link__*: [https://www.vaultproject.io/api/auth/userpass/index.html#create-update-user](https://www.vaultproject.io/api/auth/userpass/index.html#create-update-user)

**Parameters:**

| Name | Type |
| ------ | ------ |
| username | `string` |
| payload | [IUpsertPayload](../interfaces/iuserpassauth.iupsertpayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="login"></a>

###  login

▸ **login**(username: *`string`*, password: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

*Defined in [auth-methods/UserPassAuth.ts:49](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/auth-methods/UserPassAuth.ts#L49)*

Login with the username and password.

*__link__*: [https://www.vaultproject.io/api/auth/userpass/index.html#login](https://www.vaultproject.io/api/auth/userpass/index.html#login)

**Parameters:**

| Name | Type |
| ------ | ------ |
| username | `string` |
| password | `string` |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

___

