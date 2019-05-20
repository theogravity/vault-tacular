[Vault client for node.js](../README.md) > [PostgreSqlEngine](../classes/postgresqlengine.md)

# Class: PostgreSqlEngine

## Hierarchy

↳  [BaseDatabaseEngine](basedatabaseengine.md)

**↳ PostgreSqlEngine**

## Index

### Constructors

* [constructor](postgresqlengine.md#constructor)

### Methods

* [configConnection](postgresqlengine.md#configconnection)
* [createOrUpdateRole](postgresqlengine.md#createorupdaterole)
* [deleteConnection](postgresqlengine.md#deleteconnection)
* [deleteRole](postgresqlengine.md#deleterole)
* [generateCreds](postgresqlengine.md#generatecreds)
* [listConnections](postgresqlengine.md#listconnections)
* [listRoles](postgresqlengine.md#listroles)
* [readConnection](postgresqlengine.md#readconnection)
* [readRole](postgresqlengine.md#readrole)
* [resetConnection](postgresqlengine.md#resetconnection)
* [rotateRootCreds](postgresqlengine.md#rotaterootcreds)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PostgreSqlEngine**(baseUrl: *[BaseUrl](../#baseurl)*, config?: *[IBaseClientConfig](../interfaces/ibaseclientconfig.md)*): [PostgreSqlEngine](postgresqlengine.md)

*Overrides [BaseDatabaseEngine](basedatabaseengine.md).[constructor](basedatabaseengine.md#constructor)*

*Defined in [secrets-engines/databases/PostgreSqlEngine.ts:11](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/PostgreSqlEngine.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |
| `Optional` config | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** [PostgreSqlEngine](postgresqlengine.md)

___

## Methods

<a id="configconnection"></a>

###  configConnection

▸ **configConnection**(name: *`string`*, payload: *[IPostgreConfigConnPayload](../interfaces/ipostgresqlengine.ipostgreconfigconnpayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/PostgreSqlEngine.ts:22](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/PostgreSqlEngine.ts#L22)*

Configures a Postgre connection

*__link__*: [https://www.vaultproject.io/api/secret/databases/postgresql.html#configure-connection](https://www.vaultproject.io/api/secret/databases/postgresql.html#configure-connection)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name for this database connection. |
| payload | [IPostgreConfigConnPayload](../interfaces/ipostgresqlengine.ipostgreconfigconnpayload.md) |   |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="createorupdaterole"></a>

###  createOrUpdateRole

▸ **createOrUpdateRole**(name: *`string`*, payload: *[IUpsertRolePayload](../interfaces/ipostgresqlengine.iupsertrolepayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Defined in [secrets-engines/databases/PostgreSqlEngine.ts:45](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/PostgreSqlEngine.ts#L45)*

Creates or updates a role definition.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#create-role](https://www.vaultproject.io/api/secret/databases/index.html#create-role)

*__link__*: [https://www.vaultproject.io/api/secret/databases/postgresql.html#parameters-1](https://www.vaultproject.io/api/secret/databases/postgresql.html#parameters-1)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the role to create/update. |
| payload | [IUpsertRolePayload](../interfaces/ipostgresqlengine.iupsertrolepayload.md) |   |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___
<a id="deleteconnection"></a>

###  deleteConnection

▸ **deleteConnection**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[deleteConnection](basedatabaseengine.md#deleteconnection)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:109](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L109)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[deleteRole](basedatabaseengine.md#deleterole)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:236](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L236)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[generateCreds](basedatabaseengine.md#generatecreds)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:255](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L255)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[listConnections](basedatabaseengine.md#listconnections)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:86](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L86)*

Returns a list of available connections. Only the connection names are returned, not any values.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#list-connections](https://www.vaultproject.io/api/secret/databases/index.html#list-connections)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListConnectionsResponse](../interfaces/ibasedatabaseengine.ilistconnectionsresponse.md)>>

___
<a id="listroles"></a>

###  listRoles

▸ **listRoles**(): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListRolesResponse](../interfaces/ibasedatabaseengine.ilistrolesresponse.md)>>

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[listRoles](basedatabaseengine.md#listroles)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:213](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L213)*

Returns a list of available roles. Only the role names are returned, not any values.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#list-roles](https://www.vaultproject.io/api/secret/databases/index.html#list-roles)

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IListRolesResponse](../interfaces/ibasedatabaseengine.ilistrolesresponse.md)>>

___
<a id="readconnection"></a>

###  readConnection

▸ **readConnection**(name: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IReadConnectionResponse](../interfaces/ibasedatabaseengine.ireadconnectionresponse.md)>>

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[readConnection](basedatabaseengine.md#readconnection)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:64](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L64)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[readRole](basedatabaseengine.md#readrole)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:191](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L191)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[resetConnection](basedatabaseengine.md#resetconnection)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:129](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L129)*

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

*Inherited from [BaseDatabaseEngine](basedatabaseengine.md).[rotateRootCreds](basedatabaseengine.md#rotaterootcreds)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:149](https://github.com/theogravity/vault-tacular/blob/fa3cc87/src/secrets-engines/databases/BaseDatabaseEngine.ts#L149)*

Rotate the root superuser credentials stored for the database connection. This user must have permissions to update its own password.

*__link__*: [https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials](https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Specifies the name of the connection to rotate. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<`void`>>

___

