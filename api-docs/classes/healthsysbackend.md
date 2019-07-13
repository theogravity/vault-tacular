> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [HealthSysBackend](healthsysbackend.md) /

# Class: HealthSysBackend

## Hierarchy

  * [BaseSysBackend](basesysbackend.md)

  * **HealthSysBackend**

### Index

#### Constructors

* [constructor](healthsysbackend.md#constructor)

#### Methods

* [checkStatus](healthsysbackend.md#checkstatus)
* [readHealthInfo](healthsysbackend.md#readhealthinfo)

## Constructors

###  constructor

\+ **new HealthSysBackend**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `authTokenFn?`: `Function`): *[HealthSysBackend](healthsysbackend.md)*

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) | The URL to the Vault API including the version path |
`authTokenFn?` | `Function` | - |

**Returns:** *[HealthSysBackend](healthsysbackend.md)*

## Methods

###  checkStatus

▸ **checkStatus**(`payload`: [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [system-backends/HealthSysBackend.ts:40](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/system-backends/HealthSysBackend.ts#L40)*

Same as readHealthInfo, but only returns a status code and no response body.

**`link`** https://www.vaultproject.io/api/system/health.html#read-health-information

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`payload` | [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md) |  {} |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  readHealthInfo

▸ **readHealthInfo**(`payload`: [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md)): *`Promise<IVaultResponse<IReadHealthInfoResponse>>`*

*Defined in [system-backends/HealthSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/system-backends/HealthSysBackend.ts#L23)*

This endpoint returns the health status of Vault. This matches the semantics of a Consul HTTP
health check and provides a simple way to monitor the health of a Vault instance.

The default status codes are:

- 200 if initialized, unsealed, and active
- 429 if unsealed and standby
- 472 if result recovery mode replication secondary and active
- 473 if performance standby
- 501 if not initialized
- 503 if sealed

**`link`** https://www.vaultproject.io/api/system/health.html#read-health-information

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`payload` | [IReadHealthInfoPayload](../interfaces/ihealthsysbackend.ireadhealthinfopayload.md) |  {} |

**Returns:** *`Promise<IVaultResponse<IReadHealthInfoResponse>>`*