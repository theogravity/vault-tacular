> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ISecretAuth](isecretauth.md) /

# Interface: ISecretAuth

Auth information for the secret

## Hierarchy

* **ISecretAuth**

### Index

#### Properties

* [accessor](isecretauth.md#accessor)
* [client_token](isecretauth.md#client_token)
* [entity_id](isecretauth.md#entity_id)
* [lease_duration](isecretauth.md#lease_duration)
* [metadata](isecretauth.md#metadata)
* [orphan](isecretauth.md#orphan)
* [policies](isecretauth.md#policies)
* [renewable](isecretauth.md#renewable)
* [token_policies](isecretauth.md#token_policies)
* [token_type](isecretauth.md#token_type)

## Properties

###  accessor

• **accessor**: *string*

*Defined in [interfaces/IBaseClient.ts:68](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L68)*

Accessor of the token

___

###  client_token

• **client_token**: *string*

*Defined in [interfaces/IBaseClient.ts:72](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L72)*

Token for this auth

___

###  entity_id

• **entity_id**: *string*

*Defined in [interfaces/IBaseClient.ts:74](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L74)*

___

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/IBaseClient.ts:56](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L56)*

Number of seconds the token is valid

___

###  metadata

• **metadata**: *object*

*Defined in [interfaces/IBaseClient.ts:60](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L60)*

Metadata for the auth

___

###  orphan

• **orphan**: *boolean*

*Defined in [interfaces/IBaseClient.ts:76](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L76)*

___

###  policies

• **policies**: *`Array<string>`*

*Defined in [interfaces/IBaseClient.ts:64](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L64)*

Policies attached to the auth

___

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/IBaseClient.ts:52](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L52)*

Is the auth renewable?

___

###  token_policies

• **token_policies**: *`Array<string>`*

*Defined in [interfaces/IBaseClient.ts:73](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L73)*

___

###  token_type

• **token_type**: *string*

*Defined in [interfaces/IBaseClient.ts:75](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/IBaseClient.ts#L75)*