[Vault client for node.js](../README.md) › [Globals](../globals.md) › [UnsealSysBackend](unsealsysbackend.md)

# Class: UnsealSysBackend

## Hierarchy

  ↳ [BaseSysBackend](basesysbackend.md)

  ↳ **UnsealSysBackend**

## Index

### Constructors

* [constructor](unsealsysbackend.md#constructor)

### Methods

* [submitUnsealKey](unsealsysbackend.md#submitunsealkey)

## Constructors

###  constructor

\+ **new UnsealSysBackend**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `authToken?`: [AuthTokenParam](../globals.md#authtokenparam)): *[UnsealSysBackend](unsealsysbackend.md)*

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Overrides void*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/4b12cd9/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) | The URL to the Vault API including the version path |
`authToken?` | [AuthTokenParam](../globals.md#authtokenparam) | - |

**Returns:** *[UnsealSysBackend](unsealsysbackend.md)*

## Methods

###  submitUnsealKey

▸ **submitUnsealKey**(`payload`: [ISubmitUnsealKeyPayload](../globals.md#isubmitunsealkeypayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISubmitUnsealKeyResponse](../globals.md#isubmitunsealkeyresponse)››*

*Defined in [system-backends/UnsealSysBackend.ts:14](https://github.com/theogravity/vault-tacular/blob/4b12cd9/src/system-backends/UnsealSysBackend.ts#L14)*

This endpoint is used to enter a single master key share to progress the unsealing of the
Vault. If the threshold number of master key shares is reached, Vault will attempt to unseal
the Vault. Otherwise, this API must be called multiple times until that threshold is met.

**`link`** https://www.vaultproject.io/api/system/unseal.html#sys-unseal

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ISubmitUnsealKeyPayload](../globals.md#isubmitunsealkeypayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISubmitUnsealKeyResponse](../globals.md#isubmitunsealkeyresponse)››*
