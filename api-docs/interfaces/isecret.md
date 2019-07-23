> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ISecret](isecret.md) /

# Interface: ISecret

Represents a secret from Vault

## Hierarchy

* **ISecret**

  * [IListAccessorsResponse](itokenauth.ilistaccessorsresponse.md)

  * [IReadTokenRoleResponse](itokenauth.ireadtokenroleresponse.md)

### Index

#### Properties

* [auth](isecret.md#optional-auth)
* [data](isecret.md#optional-data)
* [lease_duration](isecret.md#lease_duration)
* [lease_id](isecret.md#lease_id)
* [renewable](isecret.md#renewable)
* [request_id](isecret.md#request_id)
* [warnings](isecret.md#warnings)
* [wrap_info](isecret.md#optional-wrap_info)

## Properties

### `Optional` auth

• **auth**? : *[ISecretAuth](isecretauth.md)*

*Defined in [interfaces/IBaseClient.ts:115](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L115)*

___

### `Optional` data

• **data**? : *object*

*Defined in [interfaces/IBaseClient.ts:105](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L105)*

Secret-related result

___

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/IBaseClient.ts:101](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L101)*

Along with the lease ID, a lease duration can be read.
The lease duration is a Time To Live value: the time in seconds for
which the lease is valid. A consumer of this secret must renew the lease within that time.

___

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L95)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease_id.
This is the ID used with commands such as vault renew and vault revoke to manage the
lease of the secret.

___

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/IBaseClient.ts:114](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L114)*

If the lease is renewable

___

###  request_id

• **request_id**: *string*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L89)*

___

###  warnings

• **warnings**: *[VaultWarnings](../globals.md#vaultwarnings)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L109)*

List of warnings

___

### `Optional` wrap_info

• **wrap_info**? : *[IWrapInfo](iwrapinfo.md)*

*Defined in [interfaces/IBaseClient.ts:110](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/IBaseClient.ts#L110)*