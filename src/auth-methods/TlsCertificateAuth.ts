import { BaseAuth } from './BaseAuth'
import { ISecret } from '../interfaces/auth-methods/IBaseAuth'
import { ITlsCertificateAuth } from '../interfaces/auth-methods/ITlsCertificateAuth'
import { IVaultResponse } from '../interfaces/IBaseClient'
import {
  BaseUrl,
  IBaseClientConfig,
  VaultToken
} from '../interfaces/IBaseClient'

const DEFAULT_MOUNT_POINT = '/auth/cert'
const CREATE_ROLE_PATH = '/certs/:name'
const LOGIN_PATH = '/login'

/**
 * Uses TLS certificates for authentication.
 */
export class TlsCertificateAuth extends BaseAuth {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * Sets a CA cert and associated parameters in a role name.
   * @link https://www.vaultproject.io/api/auth/cert/index.html#create-ca-certificate-role
   */
  async createRole (
    token: VaultToken,
    name: string,
    payload: ITlsCertificateAuth.ICreateRolePayload
  ): Promise<IVaultResponse<void>> {
    const res = await this.request(
      this.getAPIUrl(CREATE_ROLE_PATH.replace(':name', name)),
      {
        headers: {
          'X-Vault-Token': token
        },
        method: 'POST',
        json: payload
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Log in and fetch a token. If there is a valid chain to a CA configured in the method and all
   * role constraints are matched, a token will be issued. If the certificate has DNS SANs in it,
   * each of those will be verified. If Common Name is required to be verified, then it should be
   * a fully qualified DNS domain name and must be duplicated as a DNS SAN
   * (see https://tools.ietf.org/html/rfc6125#section-2.3).
   *
   * The certificate *must* have signing capability
   * @link https://www.vaultproject.io/api/auth/cert/index.html#login-with-tls-certificate-method
   */
  async login (
    payload: ITlsCertificateAuth.ILoginPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(this.getAPIUrl(LOGIN_PATH), {
      method: 'POST',
      json: {
        name: payload.name
      },
      ca: payload.ca,
      cert: payload.cert,
      key: payload.key
    })

    return {
      statusCode: res.statusCode,
      data: res.body as ISecret
    }
  }
}
