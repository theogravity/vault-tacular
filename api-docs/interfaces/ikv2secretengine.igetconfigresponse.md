> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IKv2SecretEngine](../modules/ikv2secretengine.md) / [IGetConfigResponse](ikv2secretengine.igetconfigresponse.md) /

# Interface: IGetConfigResponse

## Hierarchy

* [ISetConfigPayload](ikv2secretengine.isetconfigpayload.md)

  * **IGetConfigResponse**

### Index

#### Properties

* [cas_required](ikv2secretengine.igetconfigresponse.md#optional-cas_required)
* [max_versions](ikv2secretengine.igetconfigresponse.md#optional-max_versions)

## Properties

### `Optional` cas_required

• **cas_required**? : *boolean*

*Inherited from [ISetConfigPayload](ikv2secretengine.isetconfigpayload.md).[cas_required](ikv2secretengine.isetconfigpayload.md#optional-cas_required)*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L12)*

If true all keys will require the cas parameter to be set on all write requests.

___

### `Optional` max_versions

• **max_versions**? : *number*

*Inherited from [ISetConfigPayload](ikv2secretengine.isetconfigpayload.md).[max_versions](ikv2secretengine.isetconfigpayload.md#optional-max_versions)*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L8)*

The number of versions to keep per key. This value applies to all keys, but a key's metadata
setting can overwrite this value. Once a key has more than the configured allowed versions
the oldest version will be permanently deleted. Defaults to 10.