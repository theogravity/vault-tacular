[Vault client for node.js](../README.md) > [IKv2SecretEngine](../modules/ikv2secretengine.md) > [IUpdateSecretMetadataPayload](../interfaces/ikv2secretengine.iupdatesecretmetadatapayload.md)

# Interface: IUpdateSecretMetadataPayload

## Hierarchy

**IUpdateSecretMetadataPayload**

## Index

### Properties

* [cas_required](ikv2secretengine.iupdatesecretmetadatapayload.md#cas_required)
* [max_versions](ikv2secretengine.iupdatesecretmetadatapayload.md#max_versions)

---

## Properties

<a id="cas_required"></a>

### `<Optional>` cas_required

**● cas_required**: *`boolean`*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:123](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L123)*

If true the key will require the cas parameter to be set on all write requests. If false, the backend’s configuration will be used.

___
<a id="max_versions"></a>

### `<Optional>` max_versions

**● max_versions**: *`number`*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:118](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L118)*

The number of versions to keep per key. If not set, the backend’s configured max version is used. Once a key has more than the configured allowed versions the oldest version will be permanently deleted.

___

