import { ISecretAuth } from '../../IBaseClient'

export namespace IBaseDatabaseEngine {
  /**
   * plugin_name is not defined here on purpose
   * since it will be hard-coded into the database-specific engine on init
   */
  export interface IConfigConnectionPayload {
    /**
     * Specifies if the connection is verified during initial configuration. Defaults to true.
     *
     * @default true
     */
    verify_connection?: boolean

    /**
     * List of the roles allowed to use this connection. Defaults to empty (no roles),
     * if contains a "*" any role can use this connection.
     */
    allowed_roles?: Array<string>

    /**
     * Specifies the database statements to be executed to rotate the root user's credentials.
     * See the plugin's API page for more information on support and formatting for this parameter.
     */
    root_rotation_statements?: Array<string>
  }

  export interface IReadConnectionResponse {
    data: {
      /**
       * List of the roles allowed to use this connection. Defaults to empty (no roles),
       * if contains a "*" any role can use this connection.
       */
      allowed_roles: Array<string>

      connection_details: object
      plugin_name: string
    }
  }

  export interface IListConnectionsResponse {
    data: {
      keys: Array<string>
    }
  }

  export interface IUpsertRolePayload {
    /**
     * The name of the database connection to use for this role.
     */
    db_name: string

    /**
     *  Specifies the TTL for the leases associated with this role.
     *  Accepts time suffixed strings ("1h") or an integer number of seconds. Defaults to
     *  system/engine default TTL time.
     */
    default_ttl?: number | string

    /**
     *  Specifies the maximum TTL for the leases associated with this role.
     *  Accepts time suffixed strings ("1h") or an integer number of seconds.
     *  Defaults to system/mount default TTL time; this value is allowed to be less than the
     *  mount max TTL (or, if not set, the system max TTL), but it is not allowed to be longer.
     */
    max_ttl?: number | string

    /**
     * Specifies the database statements executed to create and configure a user. See the plugin's
     * API page for more information on support and formatting for this parameter.
     */
    creation_statements: Array<string>

    /**
     *  Specifies the database statements to be executed to revoke a user. See the plugin's API
     *  page for more information on support and formatting for this parameter.
     */
    revocation_statements?: Array<string>

    /**
     * Specifies the database statements to be executed rollback a create operation in the event
     * of an error. Not every plugin type will support this functionality. See the plugin's API
     * page for more information on support and formatting for this parameter.
     */
    rollback_statements?: Array<string>

    /**
     * Specifies the database statements to be executed to renew a user. Not every plugin type will
     * support this functionality. See the plugin's API page for more information on support and
     * formatting for this parameter.
     */
    renew_statements?: Array<string>
  }

  export interface IReadRoleResponse {
    data: IUpsertRolePayload
  }

  export interface IListRolesResponse {
    auth: ISecretAuth
    data: {
      keys: Array<string>
    }
    lease_duration: number
    lease_id: string
    renewable: boolean
  }

  export interface IGenerateCredsResponse {
    data: {
      username: string
      password: string
    }
  }
}
