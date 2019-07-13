import aws4 from 'aws4'
import { BaseAuth } from './BaseAuth'
import { IAwsAuth } from '../interfaces/auth-methods/IAwsAuth'
import { ISecret } from '../interfaces/IBaseClient'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { BaseUrl, IBaseClientConfig } from '../interfaces/IBaseClient'

const DEFAULT_MOUNT_POINT = '/auth/aws'
const LOGIN_PATH = '/login'

/**
 * The AWS secrets engine generates AWS access credentials dynamically based on IAM policies.
 */
export class AwsAuth extends BaseAuth {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

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
      result: res.body
    }
  }

  /**
   * Wrapper around loginUsingIam() that performs the additional steps
   * necessary to construct a proper IAM login request to get a token
   */
  async getTokenUsingIamLogin (
    payload: IAwsAuth.IGetTokenUsingIamLoginPayload
  ): Promise<IVaultResponse<ISecret>> {
    const body = 'Action=GetCallerIdentity&Version=2011-06-15'
    const stsUrl = payload.stsUrl || 'https://sts.amazonaws.com/'

    const { headers } = aws4.sign(
      {
        service: 'sts',
        body,
        headers: payload.iamRequestHeaders
      },
      payload.credentials
    )

    return this.loginUsingIam({
      role: payload.role,
      iam_http_request_method: 'POST',
      iam_request_url: Buffer.from(stsUrl).toString('base64'),
      iam_request_body: Buffer.from(body).toString('base64'),
      iam_request_headers: Buffer.from(JSON.stringify(headers)).toString(
        'base64'
      )
    })
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
