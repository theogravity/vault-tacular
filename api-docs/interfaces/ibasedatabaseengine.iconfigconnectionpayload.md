[Vault client for node.js](../README.md) > [IBaseDatabaseEngine](../modules/ibasedatabaseengine.md) > [IConfigConnectionPayload](../interfaces/ibasedatabaseengine.iconfigconnectionpayload.md)

# Interface: IConfigConnectionPayload

plugin\_name is not defined here on purpose since it will be hard-coded into the database-specific engine on init

## Hierarchy

**IConfigConnectionPayload**

↳  [IPostgreConfigConnPayload](ipostgresqlengine.ipostgreconfigconnpayload.md)

## Index

### Properties

* [allowed_roles](ibasedatabaseengine.iconfigconnectionpayload.md#allowed_roles)
* [root_rotation_statements](ibasedatabaseengine.iconfigconnectionpayload.md#root_rotation_statements)
* [verify_connection](ibasedatabaseengine.iconfigconnectionpayload.md#verify_connection)

---

## Properties

<a id="allowed_roles"></a>

### `<Optional>` allowed_roles

**● allowed_roles**: *`Array`<`string`>*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:20](https://github.com/theogravity/vault-client/blob/a3d9e21/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L20)*

List of the roles allowed to use this connection. Defaults to empty (no roles), if contains a "\*" any role can use this connection.

___
<a id="root_rotation_statements"></a>

### `<Optional>` root_rotation_statements

**● root_rotation_statements**: *`Array`<`string`>*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:26](https://github.com/theogravity/vault-client/blob/a3d9e21/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L26)*

Specifies the database statements to be executed to rotate the root user's credentials. See the plugin's API page for more information on support and formatting for this parameter.

___
<a id="verify_connection"></a>

### `<Optional>` verify_connection

**● verify_connection**: *`boolean`*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:14](https://github.com/theogravity/vault-client/blob/a3d9e21/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L14)*

Specifies if the connection is verified during initial configuration. Defaults to true.

*__default__*: true

___

