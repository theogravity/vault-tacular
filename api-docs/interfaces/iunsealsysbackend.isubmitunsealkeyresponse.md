> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IUnsealSysBackend](../modules/iunsealsysbackend.md) / [ISubmitUnsealKeyResponse](iunsealsysbackend.isubmitunsealkeyresponse.md) /

# Interface: ISubmitUnsealKeyResponse

## Hierarchy

* **ISubmitUnsealKeyResponse**

### Index

#### Properties

* [cluster_id](iunsealsysbackend.isubmitunsealkeyresponse.md#optional-cluster_id)
* [cluster_name](iunsealsysbackend.isubmitunsealkeyresponse.md#optional-cluster_name)
* [n](iunsealsysbackend.isubmitunsealkeyresponse.md#n)
* [progress](iunsealsysbackend.isubmitunsealkeyresponse.md#progress)
* [sealed](iunsealsysbackend.isubmitunsealkeyresponse.md#sealed)
* [t](iunsealsysbackend.isubmitunsealkeyresponse.md#t)
* [version](iunsealsysbackend.isubmitunsealkeyresponse.md#version)

## Properties

### `Optional` cluster_id

• **cluster_id**? : *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:40](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L40)*

___

### `Optional` cluster_name

• **cluster_name**? : *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:39](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L39)*

___

###  n

• **n**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:31](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L31)*

Number of shares

___

###  progress

• **progress**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:35](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L35)*

Number of successful shares used to unseal

___

###  sealed

• **sealed**: *boolean*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L23)*

___

###  t

• **t**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:27](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L27)*

Threshold

___

###  version

• **version**: *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:36](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/system-backend/IUnsealSysBackend.ts#L36)*