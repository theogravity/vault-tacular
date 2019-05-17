import request, {
  FullResponse,
  RequestPromiseAPI,
  RequestPromiseOptions,
  RequestPromise
} from 'request-promise-native'

import { IBaseAuthConfig } from '../interfaces/auth-methods/IBaseAuth'
import {
  IBaseLoginPayload,
  ISecret
} from '../interfaces/auth-methods/IBaseAuth'
import { IVaultResponse } from '../interfaces'

export abstract class BaseAuth {
  protected config: IBaseAuthConfig
  private readonly httpClient: RequestPromiseAPI

  protected constructor (config: IBaseAuthConfig) {
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

  abstract login (payload: IBaseLoginPayload): Promise<IVaultResponse<ISecret>>

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
