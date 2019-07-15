> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IBaseDatabaseEngine](../modules/ibasedatabaseengine.md) / [IUpsertRolePayload](ibasedatabaseengine.iupsertrolepayload.md) /

# Interface: IUpsertRolePayload

## Hierarchy

* **IUpsertRolePayload**

  * [IUpsertRolePayload](ipostgresqlengine.iupsertrolepayload.md)

### Index

#### Properties

* [creation_statements](ibasedatabaseengine.iupsertrolepayload.md#creation_statements)
* [db_name](ibasedatabaseengine.iupsertrolepayload.md#db_name)
* [default_ttl](ibasedatabaseengine.iupsertrolepayload.md#optional-default_ttl)
* [max_ttl](ibasedatabaseengine.iupsertrolepayload.md#optional-max_ttl)
* [renew_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-renew_statements)
* [revocation_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-revocation_statements)
* [rollback_statements](ibasedatabaseengine.iupsertrolepayload.md#optional-rollback_statements)

## Properties

###  creation_statements

• **creation_statements**: *`Array<string>`*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:73](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L73)*

Specifies the database statements executed to create and configure a user. See the plugin's
API page for more information on support and formatting for this parameter.

___

###  db_name

• **db_name**: *string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:52](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L52)*

The name of the database connection to use for this role.

___

### `Optional` default_ttl

• **default_ttl**? : *number | string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:59](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L59)*

 Specifies the TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds. Defaults to
 system/engine default TTL time.

___

### `Optional` max_ttl

• **max_ttl**? : *number | string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:67](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L67)*

 Specifies the maximum TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds.
 Defaults to system/mount default TTL time; this value is allowed to be less than the
 mount max TTL (or, if not set, the system max TTL), but it is not allowed to be longer.

___

### `Optional` renew_statements

• **renew_statements**? : *`Array<string>`*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:93](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L93)*

Specifies the database statements to be executed to renew a user. Not every plugin type will
support this functionality. See the plugin's API page for more information on support and
formatting for this parameter.

___

### `Optional` revocation_statements

• **revocation_statements**? : *`Array<string>`*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:79](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L79)*

 Specifies the database statements to be executed to revoke a user. See the plugin's API
 page for more information on support and formatting for this parameter.

___

### `Optional` rollback_statements

• **rollback_statements**? : *`Array<string>`*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:86](https://github.com/theogravity/vault-tacular/blob/2b2acb5/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L86)*

Specifies the database statements to be executed rollback a create operation in the event
of an error. Not every plugin type will support this functionality. See the plugin's API
page for more information on support and formatting for this parameter.