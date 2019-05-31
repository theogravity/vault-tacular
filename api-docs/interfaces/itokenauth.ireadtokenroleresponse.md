[Vault client for node.js](../README.md) > [ITokenAuth](../modules/itokenauth.md) > [IReadTokenRoleResponse](../interfaces/itokenauth.ireadtokenroleresponse.md)

# Interface: IReadTokenRoleResponse

## Hierarchy

 [ISecret](isecret.md)

**↳ IReadTokenRoleResponse**

## Index

### Properties

* [auth](itokenauth.ireadtokenroleresponse.md#auth)
* [data](itokenauth.ireadtokenroleresponse.md#data)
* [lease_duration](itokenauth.ireadtokenroleresponse.md#lease_duration)
* [lease_id](itokenauth.ireadtokenroleresponse.md#lease_id)
* [renewable](itokenauth.ireadtokenroleresponse.md#renewable)
* [request_id](itokenauth.ireadtokenroleresponse.md#request_id)
* [warnings](itokenauth.ireadtokenroleresponse.md#warnings)
* [wrap_info](itokenauth.ireadtokenroleresponse.md#wrap_info)

---

## Properties

<a id="auth"></a>

###  auth

**● auth**: *`never`*

*Overrides [ISecret](isecret.md).[auth](isecret.md#auth)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:126](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/auth-methods/ITokenAuth.ts#L126)*

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Overrides [ISecret](isecret.md).[data](isecret.md#data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:127](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/auth-methods/ITokenAuth.ts#L127)*

#### Type declaration

___
<a id="lease_duration"></a>

###  lease_duration

**● lease_duration**: *`number`*

*Inherited from [ISecret](isecret.md).[lease_duration](isecret.md#lease_duration)*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L95)*

Along with the lease ID, a lease duration can be read. The lease duration is a Time To Live value: the time in seconds for which the lease is valid. A consumer of this secret must renew the lease within that time.

___
<a id="lease_id"></a>

###  lease_id

**● lease_id**: *`string`*

*Inherited from [ISecret](isecret.md).[lease_id](isecret.md#lease_id)*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L89)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease\_id. This is the ID used with commands such as vault renew and vault revoke to manage the lease of the secret.

___
<a id="renewable"></a>

###  renewable

**● renewable**: *`boolean`*

*Inherited from [ISecret](isecret.md).[renewable](isecret.md#renewable)*

*Defined in [interfaces/IBaseClient.ts:108](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L108)*

If the lease is renewable

___
<a id="request_id"></a>

###  request_id

**● request_id**: *`string`*

*Inherited from [ISecret](isecret.md).[request_id](isecret.md#request_id)*

*Defined in [interfaces/IBaseClient.ts:83](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L83)*

___
<a id="warnings"></a>

###  warnings

**● warnings**: *[VaultWarnings](../#vaultwarnings)*

*Inherited from [ISecret](isecret.md).[warnings](isecret.md#warnings)*

*Defined in [interfaces/IBaseClient.ts:103](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L103)*

List of warnings

___
<a id="wrap_info"></a>

###  wrap_info

**● wrap_info**: *`never`*

*Overrides [ISecret](isecret.md).[wrap_info](isecret.md#wrap_info)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:125](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/auth-methods/ITokenAuth.ts#L125)*

___

