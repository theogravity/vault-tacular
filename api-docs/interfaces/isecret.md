[Vault client for node.js](../README.md) > [ISecret](../interfaces/isecret.md)

# Interface: ISecret

Represents a secret from Vault

## Hierarchy

**ISecret**

↳  [IListAccessorsResponse](itokenauth.ilistaccessorsresponse.md)

↳  [IReadTokenRoleResponse](itokenauth.ireadtokenroleresponse.md)

## Index

### Properties

* [auth](isecret.md#auth)
* [data](isecret.md#data)
* [lease_duration](isecret.md#lease_duration)
* [lease_id](isecret.md#lease_id)
* [renewable](isecret.md#renewable)
* [request_id](isecret.md#request_id)
* [warnings](isecret.md#warnings)
* [wrap_info](isecret.md#wrap_info)

---

## Properties

<a id="auth"></a>

### `<Optional>` auth

**● auth**: *[ISecretAuth](isecretauth.md)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L109)*

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`object`*

*Defined in [interfaces/IBaseClient.ts:99](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L99)*

Secret-related result

___
<a id="lease_duration"></a>

###  lease_duration

**● lease_duration**: *`number`*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L95)*

Along with the lease ID, a lease duration can be read. The lease duration is a Time To Live value: the time in seconds for which the lease is valid. A consumer of this secret must renew the lease within that time.

___
<a id="lease_id"></a>

###  lease_id

**● lease_id**: *`string`*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L89)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease\_id. This is the ID used with commands such as vault renew and vault revoke to manage the lease of the secret.

___
<a id="renewable"></a>

###  renewable

**● renewable**: *`boolean`*

*Defined in [interfaces/IBaseClient.ts:108](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L108)*

If the lease is renewable

___
<a id="request_id"></a>

###  request_id

**● request_id**: *`string`*

*Defined in [interfaces/IBaseClient.ts:83](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L83)*

___
<a id="warnings"></a>

###  warnings

**● warnings**: *[VaultWarnings](../#vaultwarnings)*

*Defined in [interfaces/IBaseClient.ts:103](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L103)*

List of warnings

___
<a id="wrap_info"></a>

### `<Optional>` wrap_info

**● wrap_info**: *[IWrapInfo](iwrapinfo.md)*

*Defined in [interfaces/IBaseClient.ts:104](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/interfaces/IBaseClient.ts#L104)*

___

