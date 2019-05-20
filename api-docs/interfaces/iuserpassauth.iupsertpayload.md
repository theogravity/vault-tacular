[Vault client for node.js](../README.md) > [IUserPassAuth](../modules/iuserpassauth.md) > [IUpsertPayload](../interfaces/iuserpassauth.iupsertpayload.md)

# Interface: IUpsertPayload

## Hierarchy

**IUpsertPayload**

## Index

### Properties

* [bound_cidrs](iuserpassauth.iupsertpayload.md#bound_cidrs)
* [max_ttl](iuserpassauth.iupsertpayload.md#max_ttl)
* [password](iuserpassauth.iupsertpayload.md#password)
* [policies](iuserpassauth.iupsertpayload.md#policies)
* [ttl](iuserpassauth.iupsertpayload.md#ttl)

---

## Properties

<a id="bound_cidrs"></a>

### `<Optional>` bound_cidrs

**● bound_cidrs**: *`string` \| `Array`<`string`>*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:24](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/auth-methods/IUserPassAuth.ts#L24)*

If set, restricts usage of the login and token to client IPs falling within the range of the specified CIDR(s).

___
<a id="max_ttl"></a>

### `<Optional>` max_ttl

**● max_ttl**: *`string`*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:19](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/auth-methods/IUserPassAuth.ts#L19)*

Maximum duration after which login should expire

___
<a id="password"></a>

###  password

**● password**: *`string`*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:6](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/auth-methods/IUserPassAuth.ts#L6)*

The password for the user. Only required when creating the user

___
<a id="policies"></a>

### `<Optional>` policies

**● policies**: *`string`*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/auth-methods/IUserPassAuth.ts#L11)*

Comma-separated list of policies. If set to empty string, only the default policy will be applicable to the user.

___
<a id="ttl"></a>

### `<Optional>` ttl

**● ttl**: *`string`*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/auth-methods/IUserPassAuth.ts#L15)*

The lease duration which decides login expiration

___

