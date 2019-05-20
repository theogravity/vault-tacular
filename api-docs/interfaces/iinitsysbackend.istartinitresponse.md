[Vault client for node.js](../README.md) > [IInitSysBackend](../modules/iinitsysbackend.md) > [IStartInitResponse](../interfaces/iinitsysbackend.istartinitresponse.md)

# Interface: IStartInitResponse

## Hierarchy

**IStartInitResponse**

## Index

### Properties

* [keys](iinitsysbackend.istartinitresponse.md#keys)
* [keys_base64](iinitsysbackend.istartinitresponse.md#keys_base64)
* [root_token](iinitsysbackend.istartinitresponse.md#root_token)

---

## Properties

<a id="keys"></a>

###  keys

**● keys**: *`Array`<`string`>*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:63](https://github.com/theogravity/vault-client/blob/38077d0/src/interfaces/system-backend/IInitSysBackend.ts#L63)*

Master keys (encrypted if pgp\_keys was provided)

___
<a id="keys_base64"></a>

###  keys_base64

**● keys_base64**: *`Array`<`string`>*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:67](https://github.com/theogravity/vault-client/blob/38077d0/src/interfaces/system-backend/IInitSysBackend.ts#L67)*

Master keys in base64 format

___
<a id="root_token"></a>

###  root_token

**● root_token**: *`string`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:71](https://github.com/theogravity/vault-client/blob/38077d0/src/interfaces/system-backend/IInitSysBackend.ts#L71)*

Initial root token

___

