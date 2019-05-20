[Vault client for node.js](../README.md) > [IInitSysBackend](../modules/iinitsysbackend.md) > [IStartInitPayload](../interfaces/iinitsysbackend.istartinitpayload.md)

# Interface: IStartInitPayload

## Hierarchy

**IStartInitPayload**

## Index

### Properties

* [pgp_keys](iinitsysbackend.istartinitpayload.md#pgp_keys)
* [root_token_pgp_key](iinitsysbackend.istartinitpayload.md#root_token_pgp_key)
* [secret_shares](iinitsysbackend.istartinitpayload.md#secret_shares)
* [secret_threshold](iinitsysbackend.istartinitpayload.md#secret_threshold)

---

## Properties

<a id="pgp_keys"></a>

### `<Optional>` pgp_keys

**● pgp_keys**: *`Array`<`string`>*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:12](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IInitSysBackend.ts#L12)*

Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as secret\_shares.

___
<a id="root_token_pgp_key"></a>

### `<Optional>` root_token_pgp_key

**● root_token_pgp_key**: *`string`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:17](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IInitSysBackend.ts#L17)*

Specifies a PGP public key used to encrypt the initial root token. The key must be base64-encoded from its original binary representation.

___
<a id="secret_shares"></a>

###  secret_shares

**● secret_shares**: *`number`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:21](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IInitSysBackend.ts#L21)*

Specifies the number of shares to split the master key into

___
<a id="secret_threshold"></a>

###  secret_threshold

**● secret_threshold**: *`number`*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:27](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IInitSysBackend.ts#L27)*

Specifies the number of shares required to reconstruct the master key. This must be less than or equal secret\_shares. If using Vault HSM with auto-unsealing, this value must be the same as secret\_shares.

___

