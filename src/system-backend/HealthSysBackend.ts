import { BaseSysBackend } from './BaseSysBackend'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { IHealthSysBackend } from '../interfaces/system-backend/IHealthSysBackend'

const DEFAULT_PATH = '/sys/health'

export class HealthSysBackend extends BaseSysBackend {
  /**
   * This endpoint returns the health status of Vault. This matches the semantics of a Consul HTTP
   * health check and provides a simple way to monitor the health of a Vault instance.
   *
   * The default status codes are:
   *
   * - 200 if initialized, unsealed, and active
   * - 429 if unsealed and standby
   * - 472 if data recovery mode replication secondary and active
   * - 473 if performance standby
   * - 501 if not initialized
   * - 503 if sealed
   *
   * @link https://www.vaultproject.io/api/system/health.html#read-health-information
   */
  async readHealthInfo (
    payload: IHealthSysBackend.IReadHealthInfoPayload = {}
  ): Promise<IVaultResponse<IHealthSysBackend.IReadHealthInfoResponse>> {
    const res = await this.request(this.getAPIUrl(DEFAULT_PATH), {
      method: 'GET',
      qs: payload
    })

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Same as readHealthInfo, but only returns a status code and no response body.
   * @link https://www.vaultproject.io/api/system/health.html#read-health-information
   */
  async checkStatus (
    payload: IHealthSysBackend.IReadHealthInfoPayload = {}
  ): Promise<IVaultResponse<void>> {
    const res = await this.request(this.getAPIUrl(DEFAULT_PATH), {
      method: 'HEAD',
      qs: payload
    })

    return {
      statusCode: res.statusCode
    }
  }
}
