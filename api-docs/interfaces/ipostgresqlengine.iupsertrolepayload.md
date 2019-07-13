> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IPostgreSqlEngine](../modules/ipostgresqlengine.md) / [IUpsertRolePayload](ipostgresqlengine.iupsertrolepayload.md) /

# Interface: IUpsertRolePayload

## Hierarchy

* [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md)

  * **IUpsertRolePayload**

### Index

#### Properties

* [creation_statements](ipostgresqlengine.iupsertrolepayload.md#creation_statements)
* [db_name](ipostgresqlengine.iupsertrolepayload.md#db_name)
* [default_ttl](ipostgresqlengine.iupsertrolepayload.md#optional-default_ttl)
* [max_ttl](ipostgresqlengine.iupsertrolepayload.md#optional-max_ttl)
* [renew_statements](ipostgresqlengine.iupsertrolepayload.md#optional-renew_statements)
* [revocation_statements](ipostgresqlengine.iupsertrolepayload.md#optional-revocation_statements)
* [rollback_statements](ipostgresqlengine.iupsertrolepayload.md#optional-rollback_statements)

## Properties

###  creation_statements

• **creation_statements**: *`Array<string>`*

*Overrides [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[creation_statements](ibasedatabaseengine.iupsertrolepayload.md#creation_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:57](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L57)*

Specifies the database statements executed to create and configure a user.
Must be a semicolon-separated string, a base64-encoded semicolon-separated string,
a serialized JSON string array, or a base64-encoded serialized JSON string array.
The '{{name}}', '{{password}}' and '{{expiration}}' values will be substituted.

___

###  db_name

• **db_name**: *string*

*Inherited from [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[db_name](ibasedatabaseengine.iupsertrolepayload.md#db_name)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:52](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L52)*

The name of the database connection to use for this role.

___

### `Optional` default_ttl

• **default_ttl**? : *number | string*

*Inherited from [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[default_ttl](ibasedatabaseengine.iupsertrolepayload.md#optional-default_ttl)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:59](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L59)*

 Specifies the TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds. Defaults to
 system/engine default TTL time.

___

### `Optional` max_ttl

• **max_ttl**? : *number | string*

*Inherited from [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[max_ttl](ibasedatabaseengine.iupsertrolepayload.md#optional-max_ttl)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:67](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L67)*

 Specifies the maximum TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds.
 Defaults to system/mount default TTL time; this value is allowed to be less than the
 mount max TTL (or, if not set, the system max TTL), but it is not allowed to be longer.

___

### `Optional` renew_statements

• **renew_statements**? : *`Array<string>`*

*Overrides [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[renew_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-renew_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:83](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L83)*

Specifies the database statements to be executed to renew a user. Not every plugin type will
support this functionality. Must be a semicolon-separated string, a base64-encoded
semicolon-separated string, a serialized JSON string array, or a base64-encoded serialized
JSON string array. The '{{name}}' and '{{expiration}}` values will be substituted.

___

### `Optional` revocation_statements

• **revocation_statements**? : *`Array<string>`*

*Overrides [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[revocation_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-revocation_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:66](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L66)*

Specifies the database statements to be executed to revoke a user. Must be a
semicolon-separated string, a base64-encoded semicolon-separated string, a
serialized JSON string array, or a base64-encoded serialized JSON string array.
The '{{name}}' value will be substituted. If not provided defaults to a generic
drop user statement.

___

### `Optional` rollback_statements

• **rollback_statements**? : *`Array<string>`*

*Overrides [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md).[rollback_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-rollback_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:75](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L75)*

Specifies the database statements to be executed rollback a create operation in the event of
an error. Not every plugin type will support this functionality. Must be a
semicolon-separated string, a base64-encoded semicolon-separated string, a serialized JSON
string array, or a base64-encoded serialized JSON string array. The '{{name}}' value will be
substituted.