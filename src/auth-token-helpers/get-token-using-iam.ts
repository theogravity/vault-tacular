import awscred from 'awscred'
import retry from 'async-retry'
import { EventEmitter } from 'events'
import { AwsAuth, IAwsAuth } from '..'
import { AuthTokenHelperFunc, ISecretAuth } from '../interfaces/IBaseClient'

export interface IGetTokenUsingIamOpts {
  /**
   * AWS STS region. Used to resolve the STS url. No definition will result in the final STS url of
   * 'https://sts.amazonaws.com/' (with the aws4 lib region defaulting as 'us-east-1')
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

  /**
   * async-retry options when token fetch fails
   */
  retryOpts?: {
    /**
     * The maximum amount of times to retry the operation. Default is 10.
     */
    retries?: number
    /**
     * The exponential factor to use. Default is 2.
     */
    factor?: number
    /**
     * The number of milliseconds before starting the first retry. Default is 1000.
     */
    minTimeout?: number
    /**
     * The maximum number of milliseconds between two retries. Default is Infinity.
     */
    maxTimeout?: number
    /**
     * Randomizes the timeouts by multiplying with a factor between 1 to 2. Default is true.
     */
    randomize?: boolean
    /**
     * An optional Function that is invoked after a new retry is performed.
     * It's passed the Error that triggered it as a parameter, with the current times retry has executed.
     */
    onRetry?: (err?: Error, attemptNo?: number) => void
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
 * @param onError Callback for when an error is thrown
 */
export function getTokenUsingIam (
  awsAuthClient: AwsAuth,
  role: string,
  opts: IGetTokenUsingIamOpts = {},
  onError: (err: Error) => void
): AuthTokenHelperFunc {
  const manager = new IamTokenManager(awsAuthClient, role, opts, onError)

  return async () => {
    return manager.getToken()
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
  private onError: (err: Error) => void

  constructor (
    awsAuthClient: AwsAuth,
    role: string,
    opts: IGetTokenUsingIamOpts = {},
    onError?: (err: Error) => void
  ) {
    this.awsAuthClient = awsAuthClient
    this.role = role
    this.opts = opts
    this.onError = onError

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
    try {
      const resp = await retry(
        async () => {
          return this.awsAuthClient.getTokenUsingIamLogin({
            role: this.role,
            stsRegion: this.opts.stsRegion,
            credentials: await loadCredentials(),
            iamRequestHeaders: this.opts.iamRequestHeaders
          })
        },
        {
          onRetry: (err, attempt) => {
            console.log(attempt)
            console.error(err)
          },
          ...(this.opts.retryOpts || {})
        }
      )

      return resp.result.auth
    } catch (e) {
      if (this.onError) {
        this.onError(e)
      } else {
        console.error(e)
      }
    }
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
