[Vault client for node.js](../README.md) > [Kv1SecretEngine](../classes/kv1secretengine.md)

# Class: Kv1SecretEngine

Vault KV secrets engine.

## Hierarchy

↳  [BaseSecretEngine](basesecretengine.md)

**↳ Kv1SecretEngine**

## Index

### Constructors

* [constructor](kv1secretengine.md#constructor)

### Methods

* [createOrUpdateSecret](kv1secretengine.md#createorupdatesecret)
* [deleteSecret](kv1secretengine.md#deletesecret)
* [listSecrets](kv1secretengine.md#listsecrets)
* [readSecret](kv1secretengine.md#readsecret)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Kv1SecretEngine**(baseUrl: *[BaseUrl](../#baseurl)*, config?: *[IBaseClientConfig](../interfaces/ibaseclientconfig.md)*): [Kv1SecretEngine](kv1secretengine.md)

*Defined in [secrets-engines/Kv1SecretEngine.ts:15](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/secrets-engines/Kv1SecretEngine.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |
| `Optional` config | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** [Kv1SecretEngine](kv1secretengine.md)

___

## Methods

<a id="createorupdatesecret"></a>

###  createOrUpdateSecret

▸ **createOrUpdateSecret**(path: *`string`*, payload: *[ICreateOrUpdateSecretPayload](../interfaces/ikv1secretengine.icreateorupdatesecretpayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/Kv1SecretEngine.ts:77](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/secrets-engines/Kv1SecretEngine.ts#L77)*

Stores a secret at the specified location. If the value does not yet exist, the calling token must have an ACL policy granting the create capability. If the value already exists, the calling token must have an ACL policy granting the update capability.

*__link__*: [https://www.vaultproject.io/api/secret/kv/kv-v1.html#create-update-secret](https://www.vaultproject.io/api/secret/kv/kv-v1.html#create-update-secret)

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |
| payload | [ICreateOrUpdateSecretPayload](../interfaces/ikv1secretengine.icreateorupdatesecretpayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="deletesecret"></a>

###  deleteSecret

▸ **deleteSecret**(path: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/Kv1SecretEngine.ts:99](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/secrets-engines/Kv1SecretEngine.ts#L99)*

Deletes the secret at the specified location.

*__link__*: [https://www.vaultproject.io/api/secret/kv/kv-v1.html#delete-secret](https://www.vaultproject.io/api/secret/kv/kv-v1.html#delete-secret)

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="listsecrets"></a>

###  listSecrets

▸ **listSecrets**(path: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListSecretsResponse](../interfaces/ikv1secretengine.ilistsecretsresponse.md)>>

*Defined in [secrets-engines/Kv1SecretEngine.ts:53](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/secrets-engines/Kv1SecretEngine.ts#L53)*

returns a list of key names at the specified location. Folders are suffixed with /. The input must be a folder; list on a file will not return a value. Note that no policy-based filtering is performed on keys; do not encode sensitive information in key names. The values themselves are not accessible via this command.

*__link__*: [https://www.vaultproject.io/api/secret/kv/kv-v1.html#list-secrets](https://www.vaultproject.io/api/secret/kv/kv-v1.html#list-secrets)

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListSecretsResponse](../interfaces/ikv1secretengine.ilistsecretsresponse.md)>>

___
<a id="readsecret"></a>

###  readSecret

▸ **readSecret**(path: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadSecretResponse](../interfaces/ikv1secretengine.ireadsecretresponse.md)>>

*Defined in [secrets-engines/Kv1SecretEngine.ts:28](https://github.com/theogravity/vault-tacular/blob/cbfbab1/src/secrets-engines/Kv1SecretEngine.ts#L28)*

This endpoint retrieves the secret at the specified location

*__link__*: [https://www.vaultproject.io/api/secret/kv/kv-v1.html#read-secret](https://www.vaultproject.io/api/secret/kv/kv-v1.html#read-secret)

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadSecretResponse](../interfaces/ikv1secretengine.ireadsecretresponse.md)>>

___

