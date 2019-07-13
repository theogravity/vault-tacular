import awscred from 'awscred'
import { EventEmitter } from 'events'
import { AwsAuth, IAwsAuth } from '..'
import { ISecretAuth } from '../interfaces/IBaseClient'

export interface IGetTokenUsingIamOpts {
  /**
   * The AWS STS Url. Default is https://sts.amazonaws.com
   */
  stsUrl?: string
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
) {
  return async () => {
    const manager = new IamTokenManager(awsAuthClient, role, opts)
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

class IamTokenManager {
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
      setTimeout(this.refreshTimer)
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
      stsUrl: this.opts.stsUrl,
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
