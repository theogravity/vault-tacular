[Vault client for node.js](../README.md) > [ISecretAuth](../interfaces/isecretauth.md)

# Interface: ISecretAuth

Auth information for the secret

## Hierarchy

**ISecretAuth**

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

---

## Properties

<a id="accessor"></a>

###  accessor

**● accessor**: *`string`*

*Defined in [interfaces/IBaseClient.ts:68](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L68)*

Accessor of the token

___
<a id="client_token"></a>

###  client_token

**● client_token**: *`string`*

*Defined in [interfaces/IBaseClient.ts:72](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L72)*

Token for this auth

___
<a id="entity_id"></a>

###  entity_id

**● entity_id**: *`string`*

*Defined in [interfaces/IBaseClient.ts:74](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L74)*

___
<a id="lease_duration"></a>

###  lease_duration

**● lease_duration**: *`number`*

*Defined in [interfaces/IBaseClient.ts:56](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L56)*

Number of seconds the token is valid

___
<a id="metadata"></a>

###  metadata

**● metadata**: *`object`*

*Defined in [interfaces/IBaseClient.ts:60](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L60)*

Metadata for the auth

___
<a id="orphan"></a>

###  orphan

**● orphan**: *`boolean`*

*Defined in [interfaces/IBaseClient.ts:76](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L76)*

___
<a id="policies"></a>

###  policies

**● policies**: *`Array`<`string`>*

*Defined in [interfaces/IBaseClient.ts:64](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L64)*

Policies attached to the auth

___
<a id="renewable"></a>

###  renewable

**● renewable**: *`boolean`*

*Defined in [interfaces/IBaseClient.ts:52](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L52)*

Is the auth renewable

___
<a id="token_policies"></a>

###  token_policies

**● token_policies**: *`Array`<`string`>*

*Defined in [interfaces/IBaseClient.ts:73](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L73)*

___
<a id="token_type"></a>

###  token_type

**● token_type**: *`string`*

*Defined in [interfaces/IBaseClient.ts:75](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/IBaseClient.ts#L75)*

___

