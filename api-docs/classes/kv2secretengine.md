> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [Kv2SecretEngine](kv2secretengine.md) /

# Class: Kv2SecretEngine

Vault KV secrets engine while running in versioned mode.

## Hierarchy

  * [BaseSecretEngine](basesecretengine.md)

  * **Kv2SecretEngine**

### Index

#### Constructors

* [constructor](kv2secretengine.md#constructor)

#### Methods

* [configEngine](kv2secretengine.md#configengine)
* [createOrUpdateSecret](kv2secretengine.md#createorupdatesecret)
* [deleteLatestSecretVersion](kv2secretengine.md#deletelatestsecretversion)
* [deleteMetadataAndAllVersions](kv2secretengine.md#deletemetadataandallversions)
* [deleteSecretVersions](kv2secretengine.md#deletesecretversions)
* [destroySecretVersions](kv2secretengine.md#destroysecretversions)
* [listSecrets](kv2secretengine.md#listsecrets)
* [readEngineConfig](kv2secretengine.md#readengineconfig)
* [readSecretMetadata](kv2secretengine.md#readsecretmetadata)
* [readSecretVersion](kv2secretengine.md#readsecretversion)
* [undeleteSecretVersions](kv2secretengine.md#undeletesecretversions)
* [updateSecretMetadata](kv2secretengine.md#updatesecretmetadata)

## Constructors

###  constructor

\+ **new Kv2SecretEngine**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[Kv2SecretEngine](kv2secretengine.md)*

*Defined in [secrets-engines/Kv2SecretEngine.ts:22](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[Kv2SecretEngine](kv2secretengine.md)*

## Methods

###  configEngine

▸ **configEngine**(`payload`: [ISetConfigPayload](../interfaces/ikv2secretengine.isetconfigpayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:35](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L35)*

Configures backend level settings that are applied to every key in the key-value store.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#configure-the-kv-engine

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`payload` | [ISetConfigPayload](../interfaces/ikv2secretengine.isetconfigpayload.md) |  {} |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  createOrUpdateSecret

▸ **createOrUpdateSecret**(`path`: string, `payload`: [ICreateUpdateSecretPayload](../interfaces/ikv2secretengine.icreateupdatesecretpayload.md)): *`Promise<IVaultResponse<ICreateUpdateSecretResponse>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:104](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L104)*

Creates a new version of a secret at the specified location. If the value does not yet exist,
the calling token must have an ACL policy granting the create capability. If the value already
exists, the calling token must have an ACL policy granting the update capability.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#create-update-secret

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`payload` | [ICreateUpdateSecretPayload](../interfaces/ikv2secretengine.icreateupdatesecretpayload.md) |

**Returns:** *`Promise<IVaultResponse<ICreateUpdateSecretResponse>>`*

___

###  deleteLatestSecretVersion

▸ **deleteLatestSecretVersion**(`path`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:130](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L130)*

Issues a soft delete of the secret's latest version at the specified location. This marks the
version as deleted and will stop it from being returned from reads, but the underlying result
will not be removed. A delete can be undone using the undelete path.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-latest-version-of-secret

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  deleteMetadataAndAllVersions

▸ **deleteMetadataAndAllVersions**(`path`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:292](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L292)*

Permanently deletes the key metadata and all version result for the specified key.
All version history will be removed.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-metadata-and-all-versions

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  deleteSecretVersions

▸ **deleteSecretVersions**(`path`: string, `payload`: [IDeleteSecretVersionsPayload](../interfaces/ikv2secretengine.ideletesecretversionspayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:152](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L152)*

Issues a soft delete of the specified versions of the secret. This marks the versions as
deleted and will stop them from being returned from reads, but the underlying result will not
be removed. A delete can be undone using the undelete path.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-secret-versions

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`payload` | [IDeleteSecretVersionsPayload](../interfaces/ikv2secretengine.ideletesecretversionspayload.md) |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  destroySecretVersions

▸ **destroySecretVersions**(`path`: string, `payload`: [IDestroySecretVersionsPayload](../interfaces/ikv2secretengine.idestroysecretversionspayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:198](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L198)*

Permanently removes the specified version result for the provided key and version numbers
from the key-value store.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#destroy-secret-versions

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`payload` | [IDestroySecretVersionsPayload](../interfaces/ikv2secretengine.idestroysecretversionspayload.md) |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  listSecrets

▸ **listSecrets**(`path`: string): *`Promise<IVaultResponse<IListSecretsResponse>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:223](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L223)*

Returns a list of key names at the specified location. Folders are suffixed with /.
The input must be a folder; list on a file will not return a value. Note that no policy-based
filtering is performed on keys; do not encode sensitive information in key names.
The values themselves are not accessible via this command.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#list-secrets

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *`Promise<IVaultResponse<IListSecretsResponse>>`*

___

###  readEngineConfig

▸ **readEngineConfig**(): *`Promise<IVaultResponse<IGetConfigResponse>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:56](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L56)*

Retrieves the current configuration for the secrets backend at the given path.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-kv-engine-configuration

**Returns:** *`Promise<IVaultResponse<IGetConfigResponse>>`*

___

###  readSecretMetadata

▸ **readSecretMetadata**(`path`: string): *`Promise<IVaultResponse<IReadSecretMetadataResponse>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:245](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L245)*

Retrieves the metadata and versions for the secret at the specified path.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-secret-metadata

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *`Promise<IVaultResponse<IReadSecretMetadataResponse>>`*

___

###  readSecretVersion

▸ **readSecretVersion**(`path`: string, `payload`: [IReadSecretVersionPayload](../interfaces/ikv2secretengine.ireadsecretversionpayload.md)): *`Promise<IVaultResponse<IReadSecretVersionResponse>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:78](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L78)*

Retrieves the secret at the specified location

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-secret-version

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`payload` | [IReadSecretVersionPayload](../interfaces/ikv2secretengine.ireadsecretversionpayload.md) |  {} |

**Returns:** *`Promise<IVaultResponse<IReadSecretVersionResponse>>`*

___

###  undeleteSecretVersions

▸ **undeleteSecretVersions**(`path`: string, `payload`: [IUndeleteSecretVersionsPayload](../interfaces/ikv2secretengine.iundeletesecretversionspayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:175](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L175)*

Undeletes the result for the provided version and path in the key-value store. This restores
the result, allowing it to be returned on get requests.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#undelete-secret-versions

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`payload` | [IUndeleteSecretVersionsPayload](../interfaces/ikv2secretengine.iundeletesecretversionspayload.md) |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  updateSecretMetadata

▸ **updateSecretMetadata**(`path`: string, `payload`: [IUpdateSecretMetadataPayload](../interfaces/ikv2secretengine.iupdatesecretmetadatapayload.md)): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/Kv2SecretEngine.ts:269](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/secrets-engines/Kv2SecretEngine.ts#L269)*

creates a new version of a secret at the specified location. If the value does not yet exist,
the calling token must have an ACL policy granting the create capability. If the value
already exists, the calling token must have an ACL policy granting the update capability.

**`link`** https://www.vaultproject.io/api/secret/kv/kv-v2.html#update-metadata

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`payload` | [IUpdateSecretMetadataPayload](../interfaces/ikv2secretengine.iupdatesecretmetadatapayload.md) |

**Returns:** *`Promise<IVaultResponse<void>>`*