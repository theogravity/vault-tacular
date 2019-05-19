import request, {
  FullResponse,
  RequestPromiseAPI,
  RequestPromiseOptions,
  RequestPromise
} from 'request-promise-native'

import { IBaseClientConfig } from './interfaces/IBaseClient'

export abstract class BaseClient {
  protected config: IBaseClientConfig
  private readonly httpClient: RequestPromiseAPI

  protected constructor (config: IBaseClientConfig) {
    this.config = config
    this.httpClient = request

    if (!this.config.logger) {
      this.config.logger = console
    }
  }

  getLogger (): Partial<Console> {
    return this.config.logger
  }

  getAPIUrl (path: string) {
    return this.config.baseUrl + this.config.mount + path
  }

  request (
    uri: string,
    options: RequestPromiseOptions = {}
  ): RequestPromise<FullResponse> {
    return this.httpClient(uri, {
      resolveWithFullResponse: true,
      ...options
    })
  }
}
