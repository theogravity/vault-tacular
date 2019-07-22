> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IWrappingSysBackend](../modules/iwrappingsysbackend.md) / [IUnwrapResponse](iwrappingsysbackend.iunwrapresponse.md) /

# Interface: IUnwrapResponse

## Hierarchy

* **IUnwrapResponse**

  * [IWrapResponse](iwrappingsysbackend.iwrapresponse.md)

### Index

#### Properties

* [data](iwrappingsysbackend.iunwrapresponse.md#data)
* [lease_duration](iwrappingsysbackend.iunwrapresponse.md#lease_duration)
* [lease_id](iwrappingsysbackend.iunwrapresponse.md#lease_id)
* [renewable](iwrappingsysbackend.iunwrapresponse.md#renewable)
* [request_id](iwrappingsysbackend.iunwrapresponse.md#request_id)
* [warnings](iwrappingsysbackend.iunwrapresponse.md#warnings)

## Properties

###  data

• **data**: *object*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:30](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L30)*

The set of parameters in the wrapped response from wrap().

#### Type declaration:

● \[▪ **key**: *string*\]: any

___

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:25](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L25)*

___

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:24](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L24)*

___

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:26](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L26)*

___

###  request_id

• **request_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L23)*

___

###  warnings

• **warnings**: *[VaultWarnings](../globals.md#vaultwarnings)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:33](https://github.com/theogravity/vault-tacular/blob/13bcf09/src/interfaces/system-backend/IWrappingSysBackend.ts#L33)*