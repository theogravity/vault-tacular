import { BaseSecretEngine } from './BaseSecretEngine'
import { BaseUrl, IBaseClientConfig } from '../interfaces/IBaseClient'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { IKv1SecretEngine } from '../interfaces/secrets-engines/IKv1SecretEngine'

const DEFAULT_MOUNT_POINT = '/kv'
const SECRET_READ_PATH = '/:path'
const SECRET_LIST_PATH = '/:path'
const SECRET_UPSERT_PATH = '/:path'
const SECRET_DELETE_PATH = '/:path'

/**
 * Vault KV secrets engine.
 */
export class Kv1SecretEngine extends BaseSecretEngine {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * This endpoint retrieves the secret at the specified location
   * @link https://www.vaultproject.io/api/secret/kv/kv-v1.html#read-secret
   */
  async readSecret (
    path: string
  ): Promise<IVaultResponse<IKv1SecretEngine.IReadSecretResponse>> {
    const res = await this.request(
      this.getAPIUrl(SECRET_READ_PATH.replace(':path', path)),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * returns a list of key names at the specified location. Folders are suffixed with /. The input
   * must be a folder; list on a file will not return a value. Note that no policy-based filtering
   * is performed on keys; do not encode sensitive information in key names. The values themselves
   * are not accessible via this command.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v1.html#list-secrets
   */
  async listSecrets (
    path: string
  ): Promise<IVaultResponse<IKv1SecretEngine.IListSecretsResponse>> {
    const res = await this.request(
      this.getAPIUrl(SECRET_LIST_PATH.replace(':path', path)),
      {
        method: 'LIST'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Stores a secret at the specified location. If the value does not yet exist, the calling
   * token must have an ACL policy granting the create capability. If the value already exists,
   * the calling token must have an ACL policy granting the update capability.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v1.html#create-update-secret
   */
  async createOrUpdateSecret (
    path: string,
    payload: IKv1SecretEngine.ICreateOrUpdateSecretPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_UPSERT_PATH.replace(':path', path)),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Deletes the secret at the specified location.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v1.html#delete-secret
   */
  async deleteSecret (path: string): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_DELETE_PATH.replace(':path', path)),
      {
        method: 'DELETE'
      },
      {
        authRequired: true
      }
    )

    return
  }
}
