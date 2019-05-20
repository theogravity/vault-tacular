[Vault client for node.js](../README.md) > [HealthSysBackend](../classes/healthsysbackend.md)

# Class: HealthSysBackend

## Hierarchy

↳  [BaseSysBackend](basesysbackend.md)

**↳ HealthSysBackend**

## Index

### Constructors

* [constructor](healthsysbackend.md#constructor)

### Methods

* [checkStatus](healthsysbackend.md#checkstatus)
* [readHealthInfo](healthsysbackend.md#readhealthinfo)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HealthSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [HealthSysBackend](healthsysbackend.md)

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-client/blob/91e39ec/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [HealthSysBackend](healthsysbackend.md)

___

## Methods

<a id="checkstatus"></a>

###  checkStatus

▸ **checkStatus**(payload?: *[IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [system-backends/HealthSysBackend.ts:40](https://github.com/theogravity/vault-client/blob/91e39ec/src/system-backends/HealthSysBackend.ts#L40)*

Same as readHealthInfo, but only returns a status code and no response body.

*__link__*: [https://www.vaultproject.io/api/system/health.html#read-health-information](https://www.vaultproject.io/api/system/health.html#read-health-information)

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` payload | [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md) |  {} |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="readhealthinfo"></a>

###  readHealthInfo

▸ **readHealthInfo**(payload?: *[IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadHealthInfoResponse](../interfaces/ihealthsysbackend.ireadhealthinforesponse.md)>>

*Defined in [system-backends/HealthSysBackend.ts:23](https://github.com/theogravity/vault-client/blob/91e39ec/src/system-backends/HealthSysBackend.ts#L23)*

This endpoint returns the health status of Vault. This matches the semantics of a Consul HTTP health check and provides a simple way to monitor the health of a Vault instance.

The default status codes are:

*   200 if initialized, unsealed, and active
*   429 if unsealed and standby
*   472 if result recovery mode replication secondary and active
*   473 if performance standby
*   501 if not initialized
*   503 if sealed

*__link__*: [https://www.vaultproject.io/api/system/health.html#read-health-information](https://www.vaultproject.io/api/system/health.html#read-health-information)

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` payload | [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md) |  {} |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadHealthInfoResponse](../interfaces/ihealthsysbackend.ireadhealthinforesponse.md)>>

___

