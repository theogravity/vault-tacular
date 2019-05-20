import { BaseSecretEngine } from '../BaseSecretEngine'
import {
  BaseUrl,
  IBaseClientConfig,
  IVaultResponse
} from '../../interfaces/IBaseClient'
import { IBaseDatabaseEngine } from '../../interfaces/secrets-engines/databases/IBaseDatabaseEngine'

const DEFAULT_MOUNT_POINT = '/database'
const CONFIGURE_CONN_PATH = '/config/:name'
const READ_CONN_PATH = '/config/:name'
const LIST_CONN_PATH = '/config'
const DELETE_CONN_PATH = '/config/:name'
const RESET_CONN_PATH = '/reset/:name'
const ROTATE_ROOT_CREDS_PATH = '/rotate-root/:name'
const UPSERT_ROLE_PATH = '/roles/:name'
const READ_ROLE_PATH = '/roles/:name'
const LIST_ROLES_PATH = '/roles'
const DELETE_ROLE_PATH = '/roles/:name'
const GENERATE_CREDS_PATH = '/creds/:name'

export class BaseDatabaseEngine extends BaseSecretEngine {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * Configures the connection string used to communicate with the desired database. In addition
   * to the parameters listed here, each Database plugin has additional, database plugin specific,
   * parameters for this endpoint. Please read the HTTP API for the plugin you'd wish to configure
   * to see the full list of additional parameters.
   *
   * @link https://www.vaultproject.io/api/secret/databases/index.html#configure-connection
   *
   * @param name Specifies the name for this database connection.
   * @param payload
   */
  protected async _configConnection<
    T extends IBaseDatabaseEngine.IConfigConnectionPayload
  > (name: string, payload: T): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(CONFIGURE_CONN_PATH.replace(':name', name)),
      {
        method: 'POST',
        body: payload
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * This endpoint returns the configuration settings for a connection.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#read-connection
   * @param name Specifies the name for this database connection.
   */
  async readConnection (
    name: string
  ): Promise<IVaultResponse<IBaseDatabaseEngine.IReadConnectionResponse>> {
    const res = await this.request(
      this.getAPIUrl(READ_CONN_PATH.replace(':name', name)),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Returns a list of available connections. Only the connection names are returned, not any values.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#list-connections
   */
  async listConnections (): Promise<
    IVaultResponse<IBaseDatabaseEngine.IListConnectionsResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(LIST_CONN_PATH),
      {
        method: 'LIST'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * This endpoint deletes a connection.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#delete-connection
   * @param name Specifies the name for this database connection.
   */
  async deleteConnection (name: string): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(DELETE_CONN_PATH.replace(':name', name)),
      {
        method: 'DELETE'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Closes a connection and it's underlying plugin and restarts it with the configuration
   * stored in the barrier.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#reset-connection
   * @param name Specifies the name for this database connection.
   */
  async resetConnection (name: string): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(RESET_CONN_PATH.replace(':name', name)),
      {
        method: 'POST'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Rotate the root superuser credentials stored for the database connection. This user must
   * have permissions to update its own password.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#rotate-root-credentials
   * @param name Specifies the name of the connection to rotate.
   */
  async rotateRootCreds (name: string): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(ROTATE_ROOT_CREDS_PATH.replace(':name', name)),
      {
        method: 'POST'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Creates or updates a role definition.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#create-role
   * @param name Specifies the name of the role to create/update.
   */
  protected async createOrUpdateRole (
    name: string,
    payload: IBaseDatabaseEngine.IUpsertRolePayload
  ): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(UPSERT_ROLE_PATH.replace(':name', name)),
      {
        method: 'POST',
        body: payload
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Queries the role definition.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#read-role
   * @param name Specifies the name of the role to read.
   */
  async readRole (
    name: string
  ): Promise<IVaultResponse<IBaseDatabaseEngine.IReadRoleResponse>> {
    const res = await this.request(
      this.getAPIUrl(READ_ROLE_PATH.replace(':name', name)),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Returns a list of available roles. Only the role names are returned, not any values.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#list-roles
   */
  async listRoles (): Promise<
    IVaultResponse<IBaseDatabaseEngine.IListRolesResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(LIST_ROLES_PATH),
      {
        method: 'LIST'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Deletes the role definition.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#delete-role
   * @param name Specifies the name of the role to delete
   */
  async deleteRole (name: string): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(DELETE_ROLE_PATH.replace(':name', name)),
      {
        method: 'DELETE'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Generates a new set of dynamic credentials based on the named role.
   * @link https://www.vaultproject.io/api/secret/databases/index.html#generate-credentials
   * @param name Specifies the name of the role to create credentials against.
   */
  async generateCreds (
    name: string
  ): Promise<IVaultResponse<IBaseDatabaseEngine.IGenerateCredsResponse>> {
    const res = await this.request(
      this.getAPIUrl(GENERATE_CREDS_PATH.replace(':name', name)),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }
}
