[Vault client for node.js](../README.md) › [Globals](../globals.md) › [RotateSysBackend](rotatesysbackend.md)

# Class: RotateSysBackend

## Hierarchy

  ↳ [BaseSysBackend](basesysbackend.md)

  ↳ **RotateSysBackend**

## Index

### Constructors

* [constructor](rotatesysbackend.md#constructor)

### Methods

* [rotateEncryptionKey](rotatesysbackend.md#rotateencryptionkey)

## Constructors

###  constructor

\+ **new RotateSysBackend**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `authToken?`: [AuthTokenParam](../globals.md#authtokenparam)): *[RotateSysBackend](rotatesysbackend.md)*

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Overrides void*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) | The URL to the Vault API including the version path |
`authToken?` | [AuthTokenParam](../globals.md#authtokenparam) | - |

**Returns:** *[RotateSysBackend](rotatesysbackend.md)*

## Methods

###  rotateEncryptionKey

▸ **rotateEncryptionKey**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [system-backends/RotateSysBackend.ts:14](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/system-backends/RotateSysBackend.ts#L14)*

triggers a rotation of the backend encryption key. This is the key that is used to encrypt
result written to the storage backend, and is not provided to operators. This operation is done
online. Future values are encrypted with the new key, while old values are decrypted with
previous encryption keys.

**`link`** https://www.vaultproject.io/api/system/rotate.html#rotate-encryption-key

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*
