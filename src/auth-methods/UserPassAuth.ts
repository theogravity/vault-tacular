import { BaseAuth } from './BaseAuth'
import { ISecret } from '../interfaces/IBaseClient'
import { IUserPassAuth } from '../interfaces/auth-methods/IUserPassAuth'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { BaseUrl, IBaseClientConfig } from '../interfaces/IBaseClient'

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
    username: string,
    payload: IUserPassAuth.IUpsertPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(UPSERT_PATH.replace(':username', username)),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Login with the username and password.
   * @link https://www.vaultproject.io/api/auth/userpass/index.html#login
   */
  async login (
    username: string,
    password: string
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(LOGIN_PATH.replace(':username', username)),
      {
        method: 'POST',
        json: {
          password
        }
      }
    )

    return {
      result: res.body
    }
  }
}
