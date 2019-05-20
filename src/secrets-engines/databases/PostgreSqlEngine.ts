import { BaseDatabaseEngine } from './BaseDatabaseEngine'
import {
  BaseUrl,
  IBaseClientConfig,
  IVaultResponse
} from '../../interfaces/IBaseClient'
import { IPostgreSqlEngine } from '../../interfaces/secrets-engines/databases/IPostgreSqlEngine'

const PLUGIN_NAME = 'postgresql-database-plugin'

export class PostgreSqlEngine extends BaseDatabaseEngine {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)
  }

  /**
   * Configures a Postgre connection
   * @link https://www.vaultproject.io/api/secret/databases/postgresql.html#configure-connection
   * @param name Specifies the name for this database connection.
   * @param payload
   */
  async configConnection (
    name: string,
    payload: IPostgreSqlEngine.IPostgreConfigConnPayload
  ): Promise<IVaultResponse<void>> {
    const pl: IPostgreSqlEngine.IPostgreConfigConnPayload = {
      plugin_name: PLUGIN_NAME,
      ...payload
    }

    return super._configConnection<IPostgreSqlEngine.IPostgreConfigConnPayload>(
      name,
      pl
    )
  }

  /**
   * Creates or updates a role definition.
   *
   * @link https://www.vaultproject.io/api/secret/databases/index.html#create-role
   * @link https://www.vaultproject.io/api/secret/databases/postgresql.html#parameters-1
   * @param name Specifies the name of the role to create/update.
   * @param payload
   */
  async createOrUpdateRole (
    name: string,
    payload: IPostgreSqlEngine.IUpsertRolePayload
  ): Promise<IVaultResponse<void>> {
    return super.createOrUpdateRole(name, payload)
  }
}
