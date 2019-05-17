import { BaseAuth } from './BaseAuth'
import { ISecret, VaultToken } from '../interfaces/auth-methods/IBaseAuth'
import { IUserPassAuth } from '../interfaces/auth-methods/IUserPassAuth'
import { IVaultResponse } from '../interfaces'
import { IBaseAuthConfig } from '../interfaces/auth-methods/IBaseAuth'

const DEFAULT_MOUNT_POINT = '/auth/userpass'
const LOGIN_PATH = '/login/:username'
const UPSERT_PATH = '/users/:username'

/**
 * Username and password-based auth
 */
export class UserPassAuth extends BaseAuth {
  constructor (config: IBaseAuthConfig) {
    super(config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  async create (
    token: VaultToken,
    payload: IUserPassAuth.IUpsertPayload
  ): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(UPSERT_PATH.replace(':username', payload.username)),
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

  async update (
    token: VaultToken,
    payload: IUserPassAuth.IUpsertPayload
  ): Promise<IVaultResponse<void>> {
    return this.create(token, payload)
  }

  async login (
    payload: IUserPassAuth.ILoginPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(LOGIN_PATH.replace(':username', payload.username)),
      {
        method: 'POST',
        json: {
          password: payload.password
        }
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body as ISecret
    }
  }
}
