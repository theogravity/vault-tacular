[Vault client for node.js](../README.md) > [ITokenAuth](../modules/itokenauth.md) > [IListAccessorsResponse](../interfaces/itokenauth.ilistaccessorsresponse.md)

# Interface: IListAccessorsResponse

## Hierarchy

 [ISecret](isecret.md)

**↳ IListAccessorsResponse**

## Index

### Properties

* [auth](itokenauth.ilistaccessorsresponse.md#auth)
* [data](itokenauth.ilistaccessorsresponse.md#data)
* [lease_duration](itokenauth.ilistaccessorsresponse.md#lease_duration)
* [lease_id](itokenauth.ilistaccessorsresponse.md#lease_id)
* [renewable](itokenauth.ilistaccessorsresponse.md#renewable)
* [request_id](itokenauth.ilistaccessorsresponse.md#request_id)
* [warnings](itokenauth.ilistaccessorsresponse.md#warnings)
* [wrap_info](itokenauth.ilistaccessorsresponse.md#wrap_info)

---

## Properties

<a id="auth"></a>

### `<Optional>` auth

**● auth**: *[ISecretAuth](isecretauth.md)*

*Inherited from [ISecret](isecret.md).[auth](isecret.md#auth)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L109)*

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Overrides [ISecret](isecret.md).[data](isecret.md#data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:5](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/auth-methods/ITokenAuth.ts#L5)*

#### Type declaration

___
<a id="lease_duration"></a>

###  lease_duration

**● lease_duration**: *`number`*

*Inherited from [ISecret](isecret.md).[lease_duration](isecret.md#lease_duration)*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L95)*

Along with the lease ID, a lease duration can be read. The lease duration is a Time To Live value: the time in seconds for which the lease is valid. A consumer of this secret must renew the lease within that time.

___
<a id="lease_id"></a>

###  lease_id

**● lease_id**: *`string`*

*Inherited from [ISecret](isecret.md).[lease_id](isecret.md#lease_id)*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L89)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease\_id. This is the ID used with commands such as vault renew and vault revoke to manage the lease of the secret.

___
<a id="renewable"></a>

###  renewable

**● renewable**: *`boolean`*

*Inherited from [ISecret](isecret.md).[renewable](isecret.md#renewable)*

*Defined in [interfaces/IBaseClient.ts:108](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L108)*

If the lease is renewable

___
<a id="request_id"></a>

###  request_id

**● request_id**: *`string`*

*Inherited from [ISecret](isecret.md).[request_id](isecret.md#request_id)*

*Defined in [interfaces/IBaseClient.ts:83](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L83)*

___
<a id="warnings"></a>

###  warnings

**● warnings**: *[VaultWarnings](../#vaultwarnings)*

*Inherited from [ISecret](isecret.md).[warnings](isecret.md#warnings)*

*Defined in [interfaces/IBaseClient.ts:103](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L103)*

List of warnings

___
<a id="wrap_info"></a>

### `<Optional>` wrap_info

**● wrap_info**: *[IWrapInfo](iwrapinfo.md)*

*Inherited from [ISecret](isecret.md).[wrap_info](isecret.md#wrap_info)*

*Defined in [interfaces/IBaseClient.ts:104](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/IBaseClient.ts#L104)*

___

