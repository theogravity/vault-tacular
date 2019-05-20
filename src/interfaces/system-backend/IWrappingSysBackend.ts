import { ISecretAuth, VaultWarnings } from '../IBaseClient'
import { IWrapInfo } from '../IBaseClient'

export namespace IWrappingSysBackend {
  export interface ILookupResponse {
    request_id: string
    lease_id: string
    lease_duration: number
    renewable: boolean
    data: {
      creation_path: string
      creation_time: string
      creation_ttl: number
    }
    wrap_info: IWrapInfo
    warnings: VaultWarnings
    auth: ISecretAuth
  }

  export interface IRewrapResponse extends ILookupResponse {}

  export interface IUnwrapResponse {
    request_id: string
    lease_id: string
    lease_duration: number
    renewable: boolean
    /**
     * The set of parameters in the wrapped response from wrap().
     */
    data: {
      [key: string]: any
    }
    warnings: VaultWarnings
  }

  /**
   * The exact set of given parameters will be contained in the wrapped response.
   */
  export interface IWrapPayload {
    [key: string]: any
  }

  export interface IWrapResponse extends IUnwrapResponse {
    wrap_info: IWrapInfo
  }
}
