[Vault client for node.js](../README.md) > [RotateSysBackend](../classes/rotatesysbackend.md)

# Class: RotateSysBackend

## Hierarchy

↳  [BaseSysBackend](basesysbackend.md)

**↳ RotateSysBackend**

## Index

### Constructors

* [constructor](rotatesysbackend.md#constructor)

### Methods

* [rotateEncryptionKey](rotatesysbackend.md#rotateencryptionkey)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RotateSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [RotateSysBackend](rotatesysbackend.md)

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/560d138/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [RotateSysBackend](rotatesysbackend.md)

___

## Methods

<a id="rotateencryptionkey"></a>

###  rotateEncryptionKey

▸ **rotateEncryptionKey**(): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [system-backends/RotateSysBackend.ts:14](https://github.com/theogravity/vault-tacular/blob/560d138/src/system-backends/RotateSysBackend.ts#L14)*

triggers a rotation of the backend encryption key. This is the key that is used to encrypt result written to the storage backend, and is not provided to operators. This operation is done online. Future values are encrypted with the new key, while old values are decrypted with previous encryption keys.

*__link__*: [https://www.vaultproject.io/api/system/rotate.html#rotate-encryption-key](https://www.vaultproject.io/api/system/rotate.html#rotate-encryption-key)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___

