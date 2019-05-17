import { BaseAuth } from './BaseAuth'
import { ISecret } from '../interfaces/auth-methods/IBaseAuth'
import { ITlsCertificateAuth } from '../interfaces/auth-methods/ITlsCertificateAuth'
import { IVaultResponse } from '../interfaces'
import { IBaseAuthConfig } from '../interfaces/auth-methods/IBaseAuth'

const DEFAULT_MOUNT_POINT = '/auth/cert'
const LOGIN_PATH = '/login'

/**
 * Uses TLS certificates for authentication.
 */
export class TlsCertificateAuth extends BaseAuth {
  constructor (config: IBaseAuthConfig) {
    super(config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  async login (
    payload: ITlsCertificateAuth.ILoginPayload
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
