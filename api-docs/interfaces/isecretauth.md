> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ISecretAuth](isecretauth.md) /

# Interface: ISecretAuth

Auth information for the secret

## Hierarchy

* **ISecretAuth**

## Index

### Properties

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

*Defined in [interfaces/IBaseClient.ts:74](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L74)*

Accessor of the token

___

###  client_token

• **client_token**: *string*

*Defined in [interfaces/IBaseClient.ts:78](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L78)*

Token for this auth

___

###  entity_id

• **entity_id**: *string*

*Defined in [interfaces/IBaseClient.ts:80](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L80)*

___

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/IBaseClient.ts:62](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L62)*

Number of seconds the token is valid

___

###  metadata

• **metadata**: *object*

*Defined in [interfaces/IBaseClient.ts:66](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L66)*

Metadata for the auth

___

###  orphan

• **orphan**: *boolean*

*Defined in [interfaces/IBaseClient.ts:82](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L82)*

___

###  policies

• **policies**: *`Array<string>`*

*Defined in [interfaces/IBaseClient.ts:70](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L70)*

Policies attached to the auth

___

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/IBaseClient.ts:58](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L58)*

Is the auth renewable?

___

###  token_policies

• **token_policies**: *`Array<string>`*

*Defined in [interfaces/IBaseClient.ts:79](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L79)*

___

###  token_type

• **token_type**: *string*

*Defined in [interfaces/IBaseClient.ts:81](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/IBaseClient.ts#L81)*