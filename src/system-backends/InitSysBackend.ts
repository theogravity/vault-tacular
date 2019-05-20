import { BaseSysBackend } from './BaseSysBackend'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { IInitSysBackend } from '../interfaces/system-backend/IInitSysBackend'

const DEFAULT_PATH = '/sys/init'

export class InitSysBackend extends BaseSysBackend {
  /**
   * Returns the initialization status of Vault.
   * @link https://www.vaultproject.io/api/system/init.html#read-initialization-status
   */
  async readInitStatus (): Promise<
    IVaultResponse<IInitSysBackend.IReadInitStatusResponse>
  > {
    const res = await this.request(this.getAPIUrl(DEFAULT_PATH), {
      method: 'GET'
    })

    return {
      result: res.body
    }
  }

  /**
   * Initializes a new Vault. The Vault must not have been previously initialized. The recovery
   * options, as well as the stored shares option, are only available when using Vault HSM.
   * @link https://www.vaultproject.io/api/system/init.html#start-initialization
   */
  async startInit (
    payload: IInitSysBackend.IStartInitEntPayload,
    enterprisePayload?: IInitSysBackend.IStartInitEntPayload
  ): Promise<IVaultResponse<IInitSysBackend.IStartInitResponse>> {
    let body = payload

    if (enterprisePayload) {
      body = {
        ...body,
        ...enterprisePayload
      }
    }

    const res = await this.request(this.getAPIUrl(DEFAULT_PATH), {
      method: 'PUT',
      body
    })

    return {
      result: res.body
    }
  }
}
