import { BaseClient } from '../BaseClient'
import { BaseUrl } from '../interfaces/IBaseClient'

export class BaseSysBackend extends BaseClient {
  /**
   * @param baseUrl The URL to the Vault API including the version path
   * @param [authTokenFn] An (async) function that returns the token used for the
   * Authorization / X-Vault-Token header. The client does *not* cache the result;
   * the function should implement caching and renewal of the token if necessary.
   */
  constructor (baseUrl: BaseUrl, authTokenFn?: Function) {
    super(baseUrl, {
      authToken: authTokenFn
    })
  }
}
