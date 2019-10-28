> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ITokenAuth](../modules/itokenauth.md) / [IReadTokenRoleResponse](itokenauth.ireadtokenroleresponse.md) /

# Interface: IReadTokenRoleResponse

## Hierarchy

* [ISecret](isecret.md)

  * **IReadTokenRoleResponse**

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

## Properties

###  auth

• **auth**: *never*

*Overrides [ISecret](isecret.md).[auth](isecret.md#optional-auth)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:126](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/auth-methods/ITokenAuth.ts#L126)*

___

###  data

• **data**: *object*

*Overrides [ISecret](isecret.md).[data](isecret.md#optional-data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:127](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/auth-methods/ITokenAuth.ts#L127)*

#### Type declaration:

___

###  lease_duration

• **lease_duration**: *number*

*Inherited from [ISecret](isecret.md).[lease_duration](isecret.md#lease_duration)*

*Defined in [interfaces/IBaseClient.ts:101](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/IBaseClient.ts#L101)*

Along with the lease ID, a lease duration can be read.
The lease duration is a Time To Live value: the time in seconds for
which the lease is valid. A consumer of this secret must renew the lease within that time.

___

###  lease_id

• **lease_id**: *string*

*Inherited from [ISecret](isecret.md).[lease_id](isecret.md#lease_id)*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/IBaseClient.ts#L95)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease_id.
This is the ID used with commands such as vault renew and vault revoke to manage the
lease of the secret.

___

###  renewable

• **renewable**: *boolean*

*Inherited from [ISecret](isecret.md).[renewable](isecret.md#renewable)*

*Defined in [interfaces/IBaseClient.ts:114](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/IBaseClient.ts#L114)*

If the lease is renewable

___

###  request_id

• **request_id**: *string*

*Inherited from [ISecret](isecret.md).[request_id](isecret.md#request_id)*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/IBaseClient.ts#L89)*

___

###  warnings

• **warnings**: *[VaultWarnings](../globals.md#vaultwarnings)*

*Inherited from [ISecret](isecret.md).[warnings](isecret.md#warnings)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/IBaseClient.ts#L109)*

List of warnings

___

###  wrap_info

• **wrap_info**: *never*

*Overrides [ISecret](isecret.md).[wrap_info](isecret.md#optional-wrap_info)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:125](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/auth-methods/ITokenAuth.ts#L125)*