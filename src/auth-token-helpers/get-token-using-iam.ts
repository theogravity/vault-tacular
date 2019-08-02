import awscred from 'awscred'
import { EventEmitter } from 'events'
import { AwsAuth, IAwsAuth } from '..'
import { AuthTokenHelperFunc, ISecretAuth } from '../interfaces/IBaseClient'

export interface IGetTokenUsingIamOpts {
  /**
   * The AWS STS Url. Default is https://sts.amazonaws.com if stsRegion is not specified.
   */
  stsUrl?: string
  /**
   * AWS STS region. Used to resolve the STS url if stsUrl is not specified.
   */
  stsRegion?: string
  /**
   * Additional headers to pass / encode for the aws sts:GetCallerIdentity call
   * This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
   * vault configurations
   */
  iamRequestHeaders?: {
    [key: string]: string
  }
}

/**
 * Uses AWS IAM auth to get the vault token.
 * - Caches the token
 * - Will auto-refresh if the token is refresh-able
 *
 * @param {AwsAuth} awsAuthClient an instance of the AwsAuth client
 * @param {string} role The vault role to get authorization for
 * @param {IGetTokenUsingIamOpts} opts
 */
export function getTokenUsingIam (
  awsAuthClient: AwsAuth,
  role: string,
  opts: IGetTokenUsingIamOpts = {}
): AuthTokenHelperFunc {
  const manager = new IamTokenManager(awsAuthClient, role, opts)

  return async () => {
    return manager.getToken()
  }
}

/**
 * Translates a region to an sts host
 * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html
 * @param {string} region the AWS region
 */
export function getStsUrlFromRegion (region: string) {
  switch (region) {
    case 'us-east-2':
      return 'https://sts.us-east-2.amazonaws.com'
    case 'us-east-1':
      return 'https://sts.us-east-1.amazonaws.com'
    case 'us-west-1':
      return 'https://sts.us-west-1.amazonaws.com'
    case 'us-west-2':
      return 'https://sts.us-west-2.amazonaws.com'
    case 'ca-central-1':
      return 'https://sts.ca-central-1.amazonaws.com'
    case 'ap-northeast-1':
      return 'https://sts.ap-northeast-1.amazonaws.com'
    case 'ap-northeast-2':
      return 'https://sts.ap-northeast-2.amazonaws.com'
    case 'ap-south-1':
      return 'https://sts.ap-south-1.amazonaws.com'
    case 'ap-southeast-1':
      return 'https://sts.ap-southeast-1.amazonaws.com'
    case 'ap-southeast-2':
      return 'https://sts.ap-southeast-2.amazonaws.com'
    case 'ap-east-1':
      return 'https://sts.ap-east-1.amazonaws.com'
    case 'me-south-1':
      return 'https://sts.me-south-1.amazonaws.com'
    case 'eu-central-1':
      return 'https://sts.eu-central-1.amazonaws.com'
    case 'eu-west-1':
      return 'https://sts.eu-west-1.amazonaws.com'
    case 'eu-west-2':
      return 'https://sts.eu-west-2.amazonaws.com'
    case 'eu-west-3':
      return 'https://sts.eu-west-3.amazonaws.com'
    case 'eu-north-1':
      return 'https://sts.eu-north-1.amazonaws.com'
    case 'sa-east-1':
      return 'https://sts.sa-east-1.amazonaws.com'
    default:
      if (region) {
        return `https://sts.${region}.amazonaws.com`
      }

      return 'https://sts.amazonaws.com'
  }
}

function loadCredentials (): Promise<IAwsAuth.IAwsCredentials> {
  return new Promise((resolve, reject) => {
    awscred.load((err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data.credentials)
    })
  })
}

/**
 * Manages the fetch/storage/refresh of the auth token.
 * Exported for unit tests.
 * @ignore
 */
export class IamTokenManager {
  private role: string
  private token: string
  private refreshTimer: any
  private em: EventEmitter
  private awsAuthClient: AwsAuth
  private opts: IGetTokenUsingIamOpts

  constructor (
    awsAuthClient: AwsAuth,
    role: string,
    opts: IGetTokenUsingIamOpts = {}
  ) {
    this.awsAuthClient = awsAuthClient
    this.role = role
    this.opts = opts

    // an event emitter is used for token refreshes, so we do not do recursive calls that would eventually
    // drain the app of memory
    this.em = null
  }

  async getToken () {
    if (!this.token) {
      const data = await this.doFetch()
      this.processRes(data)
    }

    return this.token
  }

  private enableRefresh = secs => {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer)
      this.refreshTimer = null
    }

    this.refreshTimer = setTimeout(async () => {
      const rslt = await this.doFetch()
      this.processRes(rslt)
    }, secs * 1000)
  }

  private async doFetch (): Promise<ISecretAuth> {
    const resp = await this.awsAuthClient.getTokenUsingIamLogin({
      role: this.role,
      credentials: await loadCredentials(),
      stsUrl: this.opts.stsUrl || getStsUrlFromRegion(this.opts.stsRegion),
      iamRequestHeaders: this.opts.iamRequestHeaders
    })

    return resp.result.auth
  }

  private processRes (data: ISecretAuth) {
    this.token = data.client_token

    if (data.renewable) {
      if (!this.em) {
        this.em = new EventEmitter()

        this.em.on('refresh', secs => {
          this.enableRefresh(secs)
        })
      }

      this.em.emit('refresh', data.lease_duration)
    }
  }
}
