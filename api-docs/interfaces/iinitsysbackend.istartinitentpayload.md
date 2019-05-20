[Vault client for node.js](../README.md) > [IInitSysBackend](../modules/iinitsysbackend.md) > [IStartInitEntPayload](../interfaces/iinitsysbackend.istartinitentpayload.md)

# Interface: IStartInitEntPayload

Enterprise-only features for vault initialization

## Hierarchy

**IStartInitEntPayload**

## Index

### Properties

* [recovery_pgp_keys](iinitsysbackend.istartinitentpayload.md#recovery_pgp_keys)
* [recovery_shares](iinitsysbackend.istartinitentpayload.md#recovery_shares)
* [recovery_threshold](iinitsysbackend.istartinitentpayload.md#recovery_threshold)
* [stored_shares](iinitsysbackend.istartinitentpayload.md#stored_shares)

---

## Properties

<a id="recovery_pgp_keys"></a>

### `<Optional>` recovery_pgp_keys

**● recovery_pgp_keys**: *`Array`<`string`>*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:56](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/system-backend/IInitSysBackend.ts#L56)*

Specifies an array of PGP public keys used to encrypt the output recovery keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as recovery\_shares.

___
<a id="recovery_shares"></a>

###  recovery_shares

**● recovery_shares**: *`number`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:43](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/system-backend/IInitSysBackend.ts#L43)*

Specifies the number of shares to split the recovery key into.

___
<a id="recovery_threshold"></a>

###  recovery_threshold

**● recovery_threshold**: *`number`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:49](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/system-backend/IInitSysBackend.ts#L49)*

Specifies the number of shares required to reconstruct the recovery key. This must be less than or equal to recovery\_shares.

___
<a id="stored_shares"></a>

###  stored_shares

**● stored_shares**: *`number`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:38](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/system-backend/IInitSysBackend.ts#L38)*

Specifies the number of shares that should be encrypted by the HSM and stored for auto-unsealing. Currently must be the same as secret\_shares.

___

