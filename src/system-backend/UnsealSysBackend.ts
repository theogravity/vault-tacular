import { BaseSystemBackend } from './BaseSystemBackend'
import { IVaultResponse } from '../interfaces'
import { IInitSysBackend } from '../interfaces/system-backend/IInitSysBackend'
import { IUnsealSysBackend } from '../interfaces/system-backend/IUnsealSysBackend'

const DEFAULT_PATH = '/sys/unseal'

export class UnsealSysBackend extends BaseSystemBackend {
  /**
   * This endpoint is used to enter a single master key share to progress the unsealing of the
   * Vault. If the threshold number of master key shares is reached, Vault will attempt to unseal
   * the Vault. Otherwise, this API must be called multiple times until that threshold is met.
   * @link https://www.vaultproject.io/api/system/unseal.html#sys-unseal
   */
  async submitUnsealKey (
    payload: IUnsealSysBackend.ISubmitUnsealKeyPayload
  ): Promise<IVaultResponse<IUnsealSysBackend.ISubmitUnsealKeyResponse>> {
    const res = await this.request(this.getAPIUrl(DEFAULT_PATH), {
      method: 'PUT',
      body: payload
    })

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }
}
