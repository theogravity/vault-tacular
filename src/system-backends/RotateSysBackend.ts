import { BaseSysBackend } from './BaseSysBackend'
import { IVaultResponse } from '../interfaces/IBaseClient'

const DEFAULT_PATH = '/sys/rotate'

export class RotateSysBackend extends BaseSysBackend {
  /**
   * triggers a rotation of the backend encryption key. This is the key that is used to encrypt
   * result written to the storage backend, and is not provided to operators. This operation is done
   * online. Future values are encrypted with the new key, while old values are decrypted with
   * previous encryption keys.
   * @link https://www.vaultproject.io/api/system/rotate.html#rotate-encryption-key
   */
  async rotateEncryptionKey (): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(DEFAULT_PATH),
      {
        method: 'PUT'
      },
      {
        authRequired: true
      }
    )

    return
  }
}
