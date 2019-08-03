> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IHealthSysBackend](../modules/ihealthsysbackend.md) / [IReadHealthInfoPayload](ihealthsysbackend.ireadhealthinfopayload.md) /

# Interface: IReadHealthInfoPayload

## Hierarchy

* **IReadHealthInfoPayload**

## Index

### Properties

* [activecode](ihealthsysbackend.ireadhealthinfopayload.md#optional-activecode)
* [drsecondarycode](ihealthsysbackend.ireadhealthinfopayload.md#optional-drsecondarycode)
* [performancestandbycode](ihealthsysbackend.ireadhealthinfopayload.md#optional-performancestandbycode)
* [perfstandbyok](ihealthsysbackend.ireadhealthinfopayload.md#optional-perfstandbyok)
* [sealedcode](ihealthsysbackend.ireadhealthinfopayload.md#optional-sealedcode)
* [standbycode](ihealthsysbackend.ireadhealthinfopayload.md#optional-standbycode)
* [standbyok](ihealthsysbackend.ireadhealthinfopayload.md#optional-standbyok)
* [uninitcode](ihealthsysbackend.ireadhealthinfopayload.md#optional-uninitcode)

## Properties

### `Optional` activecode

• **activecode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:19](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L19)*

Specifies the status code that should be returned for an active node.

___

### `Optional` drsecondarycode

• **drsecondarycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:27](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L27)*

Specifies the status code that should be returned for a DR secondary node.

___

### `Optional` performancestandbycode

• **performancestandbycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:31](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L31)*

Specifies the status code that should be returned for a performance standby node.

___

### `Optional` perfstandbyok

• **perfstandbyok**? : *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:15](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L15)*

Specifies if being a performance standby should still return the active status code instead
of the performance standby status code. This is useful when Vault is behind a
non-configurable load balance that just wants a 200-level response.

___

### `Optional` sealedcode

• **sealedcode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:35](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L35)*

Specifies the status code that should be returned for a sealed node.

___

### `Optional` standbycode

• **standbycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L23)*

Specifies the status code that should be returned for a standby node.

___

### `Optional` standbyok

• **standbyok**? : *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:9](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L9)*

Specifies if being a standby should still return the active status code instead of the
standby status code. This is useful when Vault is behind a non-configurable load balance
that just wants a 200-level response. This will not apply if the node is a performance
standby.

___

### `Optional` uninitcode

• **uninitcode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:39](https://github.com/theogravity/vault-tacular/blob/c9897f3/src/interfaces/system-backend/IHealthSysBackend.ts#L39)*

Specifies the status code that should be returned for a uninitialized node.