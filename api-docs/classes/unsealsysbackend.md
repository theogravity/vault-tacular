[Vault client for node.js](../README.md) > [UnsealSysBackend](../classes/unsealsysbackend.md)

# Class: UnsealSysBackend

## Hierarchy

↳  [BaseSysBackend](basesysbackend.md)

**↳ UnsealSysBackend**

## Index

### Constructors

* [constructor](unsealsysbackend.md#constructor)

### Methods

* [submitUnsealKey](unsealsysbackend.md#submitunsealkey)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UnsealSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [UnsealSysBackend](unsealsysbackend.md)

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [UnsealSysBackend](unsealsysbackend.md)

___

## Methods

<a id="submitunsealkey"></a>

###  submitUnsealKey

▸ **submitUnsealKey**(payload: *[ISubmitUnsealKeyPayload](../interfaces/iunsealsysbackend.isubmitunsealkeypayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISubmitUnsealKeyResponse](../interfaces/iunsealsysbackend.isubmitunsealkeyresponse.md)>>

*Defined in [system-backends/UnsealSysBackend.ts:14](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/system-backends/UnsealSysBackend.ts#L14)*

This endpoint is used to enter a single master key share to progress the unsealing of the Vault. If the threshold number of master key shares is reached, Vault will attempt to unseal the Vault. Otherwise, this API must be called multiple times until that threshold is met.

*__link__*: [https://www.vaultproject.io/api/system/unseal.html#sys-unseal](https://www.vaultproject.io/api/system/unseal.html#sys-unseal)

**Parameters:**

| Name | Type |
| ------ | ------ |
| payload | [ISubmitUnsealKeyPayload](../interfaces/iunsealsysbackend.isubmitunsealkeypayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISubmitUnsealKeyResponse](../interfaces/iunsealsysbackend.isubmitunsealkeyresponse.md)>>

___

