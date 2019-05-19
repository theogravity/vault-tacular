import { BaseClient } from '../BaseClient'
import { BaseUrl } from '../interfaces/IBaseClient'

export abstract class BaseSystemBackend extends BaseClient {
  protected constructor (baseUrl: BaseUrl) {
    super(baseUrl)
  }
}
