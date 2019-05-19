import { BaseAuth } from './BaseAuth'
import { ISecret } from '../interfaces/auth-methods/IBaseAuth'
import { IUserPassAuth } from '../interfaces/auth-methods/IUserPassAuth'
import { IVaultResponse } from '../interfaces'
import {
  BaseUrl,
  IBaseClientConfig,
  VaultToken
} from '../interfaces/IBaseClient'

const DEFAULT_MOUNT_POINT = '/auth/userpass'
const LOGIN_PATH = '/login/:username'
const UPSERT_PATH = '/users/:username'

/**
 * Username and password-based auth
 */
export class UserPassAuth extends BaseAuth {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * Create or update a user.
   * @link https://www.vaultproject.io/api/auth/userpass/index.html#create-update-user
   */
  async createOrUpdateUser (
    token: VaultToken,
    username: string,
    payload: IUserPassAuth.IUpsertPayload
  ): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(UPSERT_PATH.replace(':username', username)),
      {
        headers: {
          'X-Vault-Token': token
        },
        method: 'POST',
        json: payload
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Login with the username and password.
   * @link https://www.vaultproject.io/api/auth/userpass/index.html#login
   */
  async login (
    username: string,
    payload: IUserPassAuth.ILoginPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(LOGIN_PATH.replace(':username', username)),
      {
        method: 'POST',
        json: payload
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body as ISecret
    }
  }
}
