import request, {
  FullResponse,
  RequestPromiseAPI,
  RequestPromiseOptions,
  RequestPromise
} from 'request-promise-native'

import { BaseUrl, IBaseClientConfig } from './interfaces/IBaseClient'

export abstract class BaseClient {
  protected config: IBaseClientConfig
  protected baseUrl: BaseUrl
  private readonly httpClient: RequestPromiseAPI

  protected constructor (baseUrl: BaseUrl, config: IBaseClientConfig = {}) {
    this.baseUrl = baseUrl
    this.config = config
    this.httpClient = request
  }

  /**
   * Constructs a Vault URL
   * @param path
   */
  getAPIUrl (path: string) {
    if (this.config.mount) {
      return this.baseUrl + this.config.mount + path
    }

    return this.baseUrl + path
  }

  request (
    uri: string,
    options: RequestPromiseOptions = {}
  ): RequestPromise<FullResponse> {
    let opts = {
      resolveWithFullResponse: true,
      ...options
    }

    if (!opts.headers) {
      opts.headers = {}
    }

    if (this.config.namespace) {
      opts.headers['X-Vault-Namespace'] = this.config.namespace
    }

    if (this.config.reqOpts) {
      opts = {
        ...this.config.reqOpts,
        ...opts
      }
    }

    return this.httpClient(uri, opts)
  }
}
