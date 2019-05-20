[Vault client for node.js](../README.md) > [BaseDatabaseEngine](../classes/basedatabaseengine.md)

# Class: BaseDatabaseEngine

## Hierarchy

↳  [BaseSecretEngine](basesecretengine.md)

**↳ BaseDatabaseEngine**

↳  [PostgreSqlEngine](postgresqlengine.md)

## Index

### Constructors

* [constructor](basedatabaseengine.md#constructor)

### Methods

* [deleteConnection](basedatabaseengine.md#deleteconnection)
* [deleteRole](basedatabaseengine.md#deleterole)
* [generateCreds](basedatabaseengine.md#generatecreds)
* [listConnections](basedatabaseengine.md#listconnections)
* [listRoles](basedatabaseengine.md#listroles)
* [readConnection](basedatabaseengine.md#readconnection)
* [readRole](basedatabaseengine.md#readrole)
* [resetConnection](basedatabaseengine.md#resetconnection)
* [rotateRootCreds](basedatabaseengine.md#rotaterootcreds)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BaseDatabaseEngine**(baseUrl: *[BaseUrl](../#baseurl)*, config?: *[IBaseClientConfig](../interfaces/ibaseclientconfig.md)*): [BaseDatabaseEngine](basedatabaseengine.md)

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:22](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |
| `Optional` config | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** [BaseDatabaseEngine](basedatabaseengine.md)

___

## Methods

<a id="deleteconnection"></a>

###  deleteConnection

▸ **deleteConnection**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:109](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L109)*

This endpoint deletes a connection.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#delete-connection](https://www.vaultproject.io/api/secret/databases/index.html#delete-connection)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name for this database connection. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="deleterole"></a>

###  deleteRole

▸ **deleteRole**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:236](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L236)*

Deletes the role definition.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#delete-role](https://www.vaultproject.io/api/secret/databases/index.html#delete-role)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the role to delete |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="generatecreds"></a>

###  generateCreds

▸ **generateCreds**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IGenerateCredsResponse](../interfaces/ibasedatabaseengine.igeneratecredsresponse.md)>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:255](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L255)*

Generates a new set of dynamic credentials based on the named role.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#generate-credentials](https://www.vaultproject.io/api/secret/databases/index.html#generate-credentials)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the role to create credentials against. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IGenerateCredsResponse](../interfaces/ibasedatabaseengine.igeneratecredsresponse.md)>>

___
<a id="listconnections"></a>

###  listConnections

▸ **listConnections**(): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListConnectionsResponse](../interfaces/ibasedatabaseengine.ilistconnectionsresponse.md)>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:86](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L86)*

Returns a list of available connections. Only the connection names are returned, not any values.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#list-connections](https://www.vaultproject.io/api/secret/databases/index.html#list-connections)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListConnectionsResponse](../interfaces/ibasedatabaseengine.ilistconnectionsresponse.md)>>

___
<a id="listroles"></a>

###  listRoles

▸ **listRoles**(): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListRolesResponse](../interfaces/ibasedatabaseengine.ilistrolesresponse.md)>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:213](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L213)*

Returns a list of available roles. Only the role names are returned, not any values.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#list-roles](https://www.vaultproject.io/api/secret/databases/index.html#list-roles)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListRolesResponse](../interfaces/ibasedatabaseengine.ilistrolesresponse.md)>>

___
<a id="readconnection"></a>

###  readConnection

▸ **readConnection**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadConnectionResponse](../interfaces/ibasedatabaseengine.ireadconnectionresponse.md)>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:64](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L64)*

This endpoint returns the configuration settings for a connection.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#read-connection](https://www.vaultproject.io/api/secret/databases/index.html#read-connection)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name for this database connection. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadConnectionResponse](../interfaces/ibasedatabaseengine.ireadconnectionresponse.md)>>

___
<a id="readrole"></a>

###  readRole

▸ **readRole**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadRoleResponse](../interfaces/ibasedatabaseengine.ireadroleresponse.md)>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:191](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L191)*

Queries the role definition.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#read-role](https://www.vaultproject.io/api/secret/databases/index.html#read-role)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the role to read. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadRoleResponse](../interfaces/ibasedatabaseengine.ireadroleresponse.md)>>

___
<a id="resetconnection"></a>

###  resetConnection

▸ **resetConnection**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:129](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L129)*

Closes a connection and it's underlying plugin and restarts it with the configuration stored in the barrier.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#reset-connection](https://www.vaultproject.io/api/secret/databases/index.html#reset-connection)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name for this database connection. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="rotaterootcreds"></a>

###  rotateRootCreds

▸ **rotateRootCreds**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:149](https://github.com/theogravity/vault-client/blob/38077d0/src/secrets-engines/databases/BaseDatabaseEngine.ts#L149)*

Rotate the root superuser credentials stored for the database connection. This user must have permissions to update its own password.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials](https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the connection to rotate. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___

