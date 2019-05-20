[Vault client for node.js](../README.md) > [InitSysBackend](../classes/initsysbackend.md)

# Class: InitSysBackend

## Hierarchy

↳  [BaseSysBackend](basesysbackend.md)

**↳ InitSysBackend**

## Index

### Constructors

* [constructor](initsysbackend.md#constructor)

### Methods

* [readInitStatus](initsysbackend.md#readinitstatus)
* [startInit](initsysbackend.md#startinit)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InitSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [InitSysBackend](initsysbackend.md)

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-client/blob/e1877fc/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [InitSysBackend](initsysbackend.md)

___

## Methods

<a id="readinitstatus"></a>

###  readInitStatus

▸ **readInitStatus**(): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadInitStatusResponse](../interfaces/iinitsysbackend.ireadinitstatusresponse.md)>>

*Defined in [system-backends/InitSysBackend.ts:12](https://github.com/theogravity/vault-client/blob/e1877fc/src/system-backends/InitSysBackend.ts#L12)*

Returns the initialization status of Vault.

*__link__*: [https://www.vaultproject.io/api/system/init.html#read-initialization-status](https://www.vaultproject.io/api/system/init.html#read-initialization-status)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadInitStatusResponse](../interfaces/iinitsysbackend.ireadinitstatusresponse.md)>>

___
<a id="startinit"></a>

###  startInit

▸ **startInit**(payload: *[IStartInitPayload](../interfaces/iinitsysbackend.istartinitpayload.md)*, enterprisePayload?: *[IStartInitEntPayload](../interfaces/iinitsysbackend.istartinitentpayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IStartInitResponse](../interfaces/iinitsysbackend.istartinitresponse.md)>>

*Defined in [system-backends/InitSysBackend.ts:29](https://github.com/theogravity/vault-client/blob/e1877fc/src/system-backends/InitSysBackend.ts#L29)*

Initializes a new Vault. The Vault must not have been previously initialized. The recovery options, as well as the stored shares option, are only available when using Vault HSM.

*__link__*: [https://www.vaultproject.io/api/system/init.html#start-initialization](https://www.vaultproject.io/api/system/init.html#start-initialization)

**Parameters:**

| Name | Type |
| ------ | ------ |
| payload | [IStartInitPayload](../interfaces/iinitsysbackend.istartinitpayload.md) |
| `Optional` enterprisePayload | [IStartInitEntPayload](../interfaces/iinitsysbackend.istartinitentpayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IStartInitResponse](../interfaces/iinitsysbackend.istartinitresponse.md)>>

___

