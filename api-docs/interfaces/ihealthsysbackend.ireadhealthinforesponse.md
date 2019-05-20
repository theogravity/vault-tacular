[Vault client for node.js](../README.md) > [IHealthSysBackend](../modules/ihealthsysbackend.md) > [IReadHealthInfoResponse](../interfaces/ihealthsysbackend.ireadhealthinforesponse.md)

# Interface: IReadHealthInfoResponse

Note: replication\_perf\_mode and replication\_dr\_mode reflect the state of the active node in the cluster; if you are querying it for a standby that has just come up, it can take a small time for the active node to inform the standby of its status.

## Hierarchy

**IReadHealthInfoResponse**

## Index

### Properties

* [cluster_id](ihealthsysbackend.ireadhealthinforesponse.md#cluster_id)
* [cluster_name](ihealthsysbackend.ireadhealthinforesponse.md#cluster_name)
* [initialized](ihealthsysbackend.ireadhealthinforesponse.md#initialized)
* [performance_standby](ihealthsysbackend.ireadhealthinforesponse.md#performance_standby)
* [replication_dr_mode](ihealthsysbackend.ireadhealthinforesponse.md#replication_dr_mode)
* [replication_perf_mode](ihealthsysbackend.ireadhealthinforesponse.md#replication_perf_mode)
* [sealed](ihealthsysbackend.ireadhealthinforesponse.md#sealed)
* [server_time_utc](ihealthsysbackend.ireadhealthinforesponse.md#server_time_utc)
* [standby](ihealthsysbackend.ireadhealthinforesponse.md#standby)
* [version](ihealthsysbackend.ireadhealthinforesponse.md#version)

---

## Properties

<a id="cluster_id"></a>

###  cluster_id

**● cluster_id**: *`string`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:57](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L57)*

___
<a id="cluster_name"></a>

###  cluster_name

**● cluster_name**: *`string`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:56](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L56)*

___
<a id="initialized"></a>

###  initialized

**● initialized**: *`boolean`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:48](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L48)*

___
<a id="performance_standby"></a>

###  performance_standby

**● performance_standby**: *`boolean`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:51](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L51)*

___
<a id="replication_dr_mode"></a>

###  replication_dr_mode

**● replication_dr_mode**: *`string`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:53](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L53)*

___
<a id="replication_perf_mode"></a>

###  replication_perf_mode

**● replication_perf_mode**: *`string`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:52](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L52)*

___
<a id="sealed"></a>

###  sealed

**● sealed**: *`boolean`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:49](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L49)*

___
<a id="server_time_utc"></a>

###  server_time_utc

**● server_time_utc**: *`number`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:54](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L54)*

___
<a id="standby"></a>

###  standby

**● standby**: *`boolean`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:50](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L50)*

___
<a id="version"></a>

###  version

**● version**: *`string`*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:55](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/system-backend/IHealthSysBackend.ts#L55)*

___

