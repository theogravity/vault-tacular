> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IInitSysBackend](../modules/iinitsysbackend.md) / [IStartInitResponse](iinitsysbackend.istartinitresponse.md) /

# Interface: IStartInitResponse

## Hierarchy

* **IStartInitResponse**

### Index

#### Properties

* [keys](iinitsysbackend.istartinitresponse.md#keys)
* [keys_base64](iinitsysbackend.istartinitresponse.md#keys_base64)
* [root_token](iinitsysbackend.istartinitresponse.md#root_token)

## Properties

###  keys

• **keys**: *`Array<string>`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:63](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/system-backend/IInitSysBackend.ts#L63)*

Master keys (encrypted if pgp_keys was provided)

___

###  keys_base64

• **keys_base64**: *`Array<string>`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:67](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/system-backend/IInitSysBackend.ts#L67)*

Master keys in base64 format

___

###  root_token

• **root_token**: *string*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:71](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/interfaces/system-backend/IInitSysBackend.ts#L71)*

Initial root token