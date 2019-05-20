[Vault client for node.js](../README.md) > [IUnsealSysBackend](../modules/iunsealsysbackend.md) > [ISubmitUnsealKeyPayload](../interfaces/iunsealsysbackend.isubmitunsealkeypayload.md)

# Interface: ISubmitUnsealKeyPayload

Either the key or reset parameter must be provided; if both are provided, reset takes precedence.

## Hierarchy

**ISubmitUnsealKeyPayload**

## Index

### Properties

* [key](iunsealsysbackend.isubmitunsealkeypayload.md#key)
* [migrate](iunsealsysbackend.isubmitunsealkeypayload.md#migrate)
* [reset](iunsealsysbackend.isubmitunsealkeypayload.md#reset)

---

## Properties

<a id="key"></a>

### `<Optional>` key

**● key**: *`string`*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:10](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IUnsealSysBackend.ts#L10)*

Specifies a single master key share. This is required unless reset is true.

___
<a id="migrate"></a>

### `<Optional>` migrate

**● migrate**: *`boolean`*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:19](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IUnsealSysBackend.ts#L19)*

Available in 1.0 - Used to migrate the seal from shamir to autoseal or autoseal to shamir. Must be provided on all unseal key calls.

___
<a id="reset"></a>

### `<Optional>` reset

**● reset**: *`boolean`*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:14](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/system-backend/IUnsealSysBackend.ts#L14)*

Specifies if previously-provided unseal keys are discarded and the unseal process is reset.

___

