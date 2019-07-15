> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IPostgreSqlEngine](../modules/ipostgresqlengine.md) / [IPostgreConfigConnPayload](ipostgresqlengine.ipostgreconfigconnpayload.md) /

# Interface: IPostgreConfigConnPayload

## Hierarchy

* [IConfigConnectionPayload](ibasedatabaseengine.iconfigconnectionpayload.md)

  * **IPostgreConfigConnPayload**

### Index

#### Properties

* [allowed_roles](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-allowed_roles)
* [connection_url](ipostgresqlengine.ipostgreconfigconnpayload.md#connection_url)
* [max_connection_lifetime](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-max_connection_lifetime)
* [max_idle_connections](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-max_idle_connections)
* [max_open_connections](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-max_open_connections)
* [password](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-password)
* [plugin_name](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-plugin_name)
* [root_rotation_statements](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-root_rotation_statements)
* [username](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-username)
* [verify_connection](ipostgresqlengine.ipostgreconfigconnpayload.md#optional-verify_connection)

## Properties

### `Optional` allowed_roles

• **allowed_roles**? : *`Array<string>`*

*Inherited from [IConfigConnectionPayload](ibasedatabaseengine.iconfigconnectionpayload.md).[allowed_roles](ibasedatabaseengine.iconfigconnectionpayload.md#optional-allowed_roles)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:20](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L20)*

List of the roles allowed to use this connection. Defaults to empty (no roles),
if contains a "*" any role can use this connection.

___

###  connection_url

• **connection_url**: *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:11](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L11)*

Specifies the PostgreSQL DSN. This field can be templated and supports passing the username
and password parameters in the following format {{field_name}}. A templated connection
URL is required when using root credential rotation.

___

### `Optional` max_connection_lifetime

• **max_connection_lifetime**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:30](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L30)*

Specifies the maximum amount of time a connection may be reused. If <= 0s connections
are reused forever.

**`default`** 0s

___

### `Optional` max_idle_connections

• **max_idle_connections**? : *number*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:24](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L24)*

Specifies the maximum number of idle connections to the database. A zero uses the value of
max_open_connections and a negative value disables idle connections. If larger
than max_open_connections it will be reduced to be equal.

___

### `Optional` max_open_connections

• **max_open_connections**? : *number*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L17)*

Specifies the maximum number of open connections to the database.

**`default`** 2

___

### `Optional` password

• **password**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:39](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L39)*

The root credential password used in the connection URL.

___

### `Optional` plugin_name

• **plugin_name**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:46](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L46)*

Name of the postgres plugin to use. You should generally not have
to define this.

**`default`** postgresql-database-plugin

___

### `Optional` root_rotation_statements

• **root_rotation_statements**? : *`Array<string>`*

*Inherited from [IConfigConnectionPayload](ibasedatabaseengine.iconfigconnectionpayload.md).[root_rotation_statements](ibasedatabaseengine.iconfigconnectionpayload.md#optional-root_rotation_statements)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:26](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L26)*

Specifies the database statements to be executed to rotate the root user's credentials.
See the plugin's API page for more information on support and formatting for this parameter.

___

### `Optional` username

• **username**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:35](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L35)*

The root credential username used in the connection URL.

___

### `Optional` verify_connection

• **verify_connection**? : *boolean*

*Inherited from [IConfigConnectionPayload](ibasedatabaseengine.iconfigconnectionpayload.md).[verify_connection](ibasedatabaseengine.iconfigconnectionpayload.md#optional-verify_connection)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L14)*

Specifies if the connection is verified during initial configuration. Defaults to true.

**`default`** true