import { IBaseDatabaseEngine } from './IBaseDatabaseEngine'

export namespace IPostgreSqlEngine {
  export interface IPostgreConfigConnPayload
    extends IBaseDatabaseEngine.IConfigConnectionPayload {
    /**
     * Specifies the PostgreSQL DSN. This field can be templated and supports passing the username
     * and password parameters in the following format {{field_name}}. A templated connection
     * URL is required when using root credential rotation.
     */
    connection_url: string

    /**
     * Specifies the maximum number of open connections to the database.
     * @default 2
     */
    max_open_connections?: number

    /**
     * Specifies the maximum number of idle connections to the database. A zero uses the value of
     * max_open_connections and a negative value disables idle connections. If larger
     * than max_open_connections it will be reduced to be equal.
     */
    max_idle_connections?: number
    /**
     * Specifies the maximum amount of time a connection may be reused. If <= 0s connections
     * are reused forever.
     * @default 0s
     */
    max_connection_lifetime?: string

    /**
     * The root credential username used in the connection URL.
     */
    username?: string
    /**
     * The root credential password used in the connection URL.
     */
    password?: string

    /**
     * Name of the postgres plugin to use. You should generally not have
     * to define this.
     * @default postgresql-database-plugin
     */
    plugin_name?: string
  }

  export interface IUpsertRolePayload
    extends IBaseDatabaseEngine.IUpsertRolePayload {
    /**
     * Specifies the database statements executed to create and configure a user.
     * Must be a semicolon-separated string, a base64-encoded semicolon-separated string,
     * a serialized JSON string array, or a base64-encoded serialized JSON string array.
     * The '{{name}}', '{{password}}' and '{{expiration}}' values will be substituted.
     */
    creation_statements: Array<string>

    /**
     * Specifies the database statements to be executed to revoke a user. Must be a
     * semicolon-separated string, a base64-encoded semicolon-separated string, a
     * serialized JSON string array, or a base64-encoded serialized JSON string array.
     * The '{{name}}' value will be substituted. If not provided defaults to a generic
     * drop user statement.
     */
    revocation_statements?: Array<string>

    /**
     * Specifies the database statements to be executed rollback a create operation in the event of
     * an error. Not every plugin type will support this functionality. Must be a
     * semicolon-separated string, a base64-encoded semicolon-separated string, a serialized JSON
     * string array, or a base64-encoded serialized JSON string array. The '{{name}}' value will be
     * substituted.
     */
    rollback_statements?: Array<string>

    /**
     * Specifies the database statements to be executed to renew a user. Not every plugin type will
     * support this functionality. Must be a semicolon-separated string, a base64-encoded
     * semicolon-separated string, a serialized JSON string array, or a base64-encoded serialized
     * JSON string array. The '{{name}}' and '{{expiration}}` values will be substituted.
     */
    renew_statements?: Array<string>
  }
}
