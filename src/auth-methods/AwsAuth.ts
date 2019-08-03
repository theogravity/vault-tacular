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
    const stsUrl = 'https://' + AwsAuth.getStsHostFromRegion(payload.stsRegion)

    const { headers } = aws4.sign(
      {
        service: 'sts',
        body,
        region: payload.stsRegion,
        headers: {
          host: AwsAuth.getStsHostFromRegion(payload.stsRegion),
          ...payload.iamRequestHeaders
        }
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

  /**
   * Translates a region to an sts host
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html
   * @param {string} region the AWS region
   */
  static getStsHostFromRegion (region: string) {
    switch (region) {
      case 'us-east-2':
        return 'sts.us-east-2.amazonaws.com'
      case 'us-east-1':
        return 'sts.us-east-1.amazonaws.com'
      case 'us-west-1':
        return 'sts.us-west-1.amazonaws.com'
      case 'us-west-2':
        return 'sts.us-west-2.amazonaws.com'
      case 'ca-central-1':
        return 'sts.ca-central-1.amazonaws.com'
      case 'ap-northeast-1':
        return 'sts.ap-northeast-1.amazonaws.com'
      case 'ap-northeast-2':
        return 'sts.ap-northeast-2.amazonaws.com'
      case 'ap-south-1':
        return 'sts.ap-south-1.amazonaws.com'
      case 'ap-southeast-1':
        return 'sts.ap-southeast-1.amazonaws.com'
      case 'ap-southeast-2':
        return 'sts.ap-southeast-2.amazonaws.com'
      case 'ap-east-1':
        return 'sts.ap-east-1.amazonaws.com'
      case 'me-south-1':
        return 'sts.me-south-1.amazonaws.com'
      case 'eu-central-1':
        return 'sts.eu-central-1.amazonaws.com'
      case 'eu-west-1':
        return 'sts.eu-west-1.amazonaws.com'
      case 'eu-west-2':
        return 'sts.eu-west-2.amazonaws.com'
      case 'eu-west-3':
        return 'sts.eu-west-3.amazonaws.com'
      case 'eu-north-1':
        return 'sts.eu-north-1.amazonaws.com'
      case 'sa-east-1':
        return 'sts.sa-east-1.amazonaws.com'
      default:
        if (region) {
          return `sts.${region}.amazonaws.com`
        }

        return 'sts.amazonaws.com'
    }
  }
}
