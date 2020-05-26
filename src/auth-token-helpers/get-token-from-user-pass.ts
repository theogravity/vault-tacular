import { EventEmitter } from 'events'
import retry from 'async-retry'

import { UserPassAuth } from '../auth-methods/UserPassAuth'
import { ISecretAuth } from '../interfaces/IBaseClient'

export interface IGetTokenUsingUserPassOpts {
  /**
   * Instance of a configured UserPassAuth
   */
  userPassAuthClient: UserPassAuth
  username: string
  password: string
  /**
   * Called when there is an error fetching or refreshing the token
   */
  onError: (err: Error, retryCount?: number) => void
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
  }
}

/**
 * Gets a token using username / password.
 * - Caches the token
 * - Will auto-refresh if the token is refresh-able
 */
export function getTokenUsingUserPass (params: IGetTokenUsingUserPassOpts) {
  const manager = new UserPassTokenManager(params)

  return async () => {
    return manager.getToken()
  }
}

export class UserPassTokenManager {
  params: IGetTokenUsingUserPassOpts
  private em: EventEmitter
  private token: string
  private refreshTimer: any
  private client: UserPassAuth

  constructor (params: IGetTokenUsingUserPassOpts) {
    this.params = params

    // an event emitter is used for token refreshes, so we do not do recursive calls that would eventually
    // drain the app of memory
    this.em = null

    this.client = this.params.userPassAuthClient
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

    // timeout exceeds 32-bit integer
    if (secs * 1000 >= 2147483647) {
      // set to 1 day
      secs = 86400
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
          return this.client.login(this.params.username, this.params.password)
        },
        {
          onRetry: this.params.onError,
          ...(this.params.retryOpts || {})
        }
      )

      return resp.result.auth
    } catch (e) {
      this.params.onError(e)
    }
  }

  private processRes (data: ISecretAuth) {
    this.token = data?.client_token

    if (data?.renewable) {
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
