import { BaseAuth } from './BaseAuth'
import { IAwsAuth } from '../interfaces/auth-methods/IAwsAuth'
import { ISecret } from '../interfaces/auth-methods/IBaseAuth'
import { IVaultResponse } from '../interfaces'
import { IBaseClientConfig } from '../interfaces/IBaseClient'

const DEFAULT_MOUNT_POINT = '/auth/aws'
const LOGIN_PATH = '/login'

/**
 * The AWS secrets engine generates AWS access credentials dynamically based on IAM policies.
 */
export class AwsAuth extends BaseAuth {
  constructor (config: IBaseClientConfig) {
    super(config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * Generic AWS login
   * @link https://www.vaultproject.io/api/auth/aws/index.html#login
   * @param payload
   */
  async login (
    payload: IAwsAuth.ILoginPayload = {}
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

  /**
   * AWS IAM login with IAM-required payload only
   * @link https://www.vaultproject.io/api/auth/aws/index.html#login
   */
  async loginUsingIam (
    payload: IAwsAuth.ILoginIamPayload
  ): Promise<IVaultResponse<ISecret>> {
    return this.login(payload)
  }

  /**
   * AWS EC2 login with EC2-required payload only
   * @link https://www.vaultproject.io/api/auth/aws/index.html#login
   */
  async loginUsingEc2 (
    payload: IAwsAuth.ILoginEc2Payload
  ): Promise<IVaultResponse<ISecret>> {
    return this.login(payload)
  }
}
