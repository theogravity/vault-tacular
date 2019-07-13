> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [BaseDatabaseEngine](basedatabaseengine.md) /

# Class: BaseDatabaseEngine

## Hierarchy

  * [BaseSecretEngine](basesecretengine.md)

  * **BaseDatabaseEngine**

  * [PostgreSqlEngine](postgresqlengine.md)

### Index

#### Constructors

* [constructor](basedatabaseengine.md#constructor)

#### Methods

* [deleteConnection](basedatabaseengine.md#deleteconnection)
* [deleteRole](basedatabaseengine.md#deleterole)
* [generateCreds](basedatabaseengine.md#generatecreds)
* [listConnections](basedatabaseengine.md#listconnections)
* [listRoles](basedatabaseengine.md#listroles)
* [readConnection](basedatabaseengine.md#readconnection)
* [readRole](basedatabaseengine.md#readrole)
* [resetConnection](basedatabaseengine.md#resetconnection)
* [rotateRootCreds](basedatabaseengine.md#rotaterootcreds)

## Constructors

###  constructor

\+ **new BaseDatabaseEngine**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[BaseDatabaseEngine](basedatabaseengine.md)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:22](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[BaseDatabaseEngine](basedatabaseengine.md)*

## Methods

###  deleteConnection

▸ **deleteConnection**(`name`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:109](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L109)*

This endpoint deletes a connection.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#delete-connection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name for this database connection.  |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  deleteRole

▸ **deleteRole**(`name`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:236](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L236)*

Deletes the role definition.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#delete-role

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name of the role to delete  |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  generateCreds

▸ **generateCreds**(`name`: string): *`Promise<IVaultResponse<IGenerateCredsResponse>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:255](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L255)*

Generates a new set of dynamic credentials based on the named role.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#generate-credentials

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name of the role to create credentials against.  |

**Returns:** *`Promise<IVaultResponse<IGenerateCredsResponse>>`*

___

###  listConnections

▸ **listConnections**(): *`Promise<IVaultResponse<IListConnectionsResponse>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:86](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L86)*

Returns a list of available connections. Only the connection names are returned, not any values.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#list-connections

**Returns:** *`Promise<IVaultResponse<IListConnectionsResponse>>`*

___

###  listRoles

▸ **listRoles**(): *`Promise<IVaultResponse<IListRolesResponse>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:213](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L213)*

Returns a list of available roles. Only the role names are returned, not any values.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#list-roles

**Returns:** *`Promise<IVaultResponse<IListRolesResponse>>`*

___

###  readConnection

▸ **readConnection**(`name`: string): *`Promise<IVaultResponse<IReadConnectionResponse>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:64](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L64)*

This endpoint returns the configuration settings for a connection.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#read-connection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name for this database connection.  |

**Returns:** *`Promise<IVaultResponse<IReadConnectionResponse>>`*

___

###  readRole

▸ **readRole**(`name`: string): *`Promise<IVaultResponse<IReadRoleResponse>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:191](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L191)*

Queries the role definition.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#read-role

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name of the role to read.  |

**Returns:** *`Promise<IVaultResponse<IReadRoleResponse>>`*

___

###  resetConnection

▸ **resetConnection**(`name`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:129](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L129)*

Closes a connection and it's underlying plugin and restarts it with the configuration
stored in the barrier.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#reset-connection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name for this database connection.  |

**Returns:** *`Promise<IVaultResponse<void>>`*

___

###  rotateRootCreds

▸ **rotateRootCreds**(`name`: string): *`Promise<IVaultResponse<void>>`*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:149](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/secrets-engines/databases/BaseDatabaseEngine.ts#L149)*

Rotate the root superuser credentials stored for the database connection. This user must
have permissions to update its own password.

**`link`** https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Specifies the name of the connection to rotate.  |

**Returns:** *`Promise<IVaultResponse<void>>`*