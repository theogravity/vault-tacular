import { BaseAuth } from './BaseAuth'
import { IBaseAuthConfig } from '../interfaces/auth-methods/IBaseAuth'
import { IAwsAuth } from '../interfaces/auth-methods/IAwsAuth'
import { ISecret } from '../interfaces/auth-methods/IBaseAuth'
import { IVaultResponse } from '../interfaces'

const DEFAULT_MOUNT_POINT = '/auth/aws'
const LOGIN_PATH = '/login'

export class AwsAuth extends BaseAuth {
  constructor (config: IBaseAuthConfig) {
    super(config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  async login (
    payload: IAwsAuth.ILoginPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(this.getAPIUrl(LOGIN_PATH), {
      method: 'POST',
      json: payload
    })

    return {
      statusCode: res.statusCode,
      data: res.body as ISecret
    }
  }
}
