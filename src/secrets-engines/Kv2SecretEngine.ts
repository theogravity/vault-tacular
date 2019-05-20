import { BaseSecretEngine } from './BaseSecretEngine'
import { BaseUrl, IBaseClientConfig } from '../interfaces/IBaseClient'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { IKv2SecretEngine } from '../interfaces/secrets-engines/IKv2SecretEngine'

const DEFAULT_MOUNT_POINT = '/secret'
const CONFIGURE_ENGINE_PATH = '/config'
const SECRET_VERSION_PATH = '/result/:path'
const SECRET_CREATE_UPDATE_PATH = '/result/:path'
const SECRET_DELETE_LATEST_PATH = '/result/:path'
const SECRET_DELETE_VERSIONS_PATH = '/delete/:path'
const SECRET_UNDELETE_VERSIONS_PATH = '/undelete/:path'
const SECRET_DESTROY_VERSIONS_PATH = '/destroy/:path'
const SECRET_LIST_PATH = '/metadata/:path'
const SECRET_READ_METADATA_PATH = '/metadata/:path'
const SECRET_UPDATE_METADATA_PATH = '/secret/metadata/:path'
const SECRET_DELETE_METADATA_AND_ALL_VERS_PATH = '/metadata/:path'

/**
 * Vault KV secrets engine while running in versioned mode.
 */
export class Kv2SecretEngine extends BaseSecretEngine {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * Configures backend level settings that are applied to every key in the key-value store.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#configure-the-kv-engine
   */
  async configEngine (
    payload: IKv2SecretEngine.ISetConfigPayload = {}
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(CONFIGURE_ENGINE_PATH),
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
   * Retrieves the current configuration for the secrets backend at the given path.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-kv-engine-configuration
   */
  async readEngineConfig (): Promise<
    IVaultResponse<IKv2SecretEngine.IGetConfigResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(CONFIGURE_ENGINE_PATH),
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
   * Retrieves the secret at the specified location
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-secret-version
   */
  async readSecretVersion (
    path: string,
    payload: IKv2SecretEngine.IReadSecretVersionPayload
  ): Promise<IVaultResponse<IKv2SecretEngine.IReadSecretVersionResponse>> {
    const res = await this.request(
      this.getAPIUrl(SECRET_VERSION_PATH.replace(':path', path)),
      {
        method: 'GET',
        qs: payload
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
   * Creates a new version of a secret at the specified location. If the value does not yet exist,
   * the calling token must have an ACL policy granting the create capability. If the value already
   * exists, the calling token must have an ACL policy granting the update capability.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#create-update-secret
   */
  async createOrUpdateSecret (
    path: string,
    payload: IKv2SecretEngine.ICreateUpdateSecretPayload
  ): Promise<IVaultResponse<IKv2SecretEngine.ICreateUpdateSecretResponse>> {
    const res = await this.request(
      this.getAPIUrl(SECRET_CREATE_UPDATE_PATH.replace(':path', path)),
      {
        method: 'POST',
        json: payload
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
   * Issues a soft delete of the secret's latest version at the specified location. This marks the
   * version as deleted and will stop it from being returned from reads, but the underlying result
   * will not be removed. A delete can be undone using the undelete path.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-latest-version-of-secret
   */
  async deleteLatestSecretVersion (
    path: string
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_DELETE_LATEST_PATH.replace(':path', path)),
      {
        method: 'DELETE'
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Issues a soft delete of the specified versions of the secret. This marks the versions as
   * deleted and will stop them from being returned from reads, but the underlying result will not
   * be removed. A delete can be undone using the undelete path.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-secret-versions
   */
  async deleteSecretVersions (
    path: string,
    payload: IKv2SecretEngine.IDeleteSecretVersionsPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_DELETE_VERSIONS_PATH.replace(':path', path)),
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
   * Undeletes the result for the provided version and path in the key-value store. This restores
   * the result, allowing it to be returned on get requests.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#undelete-secret-versions
   */
  async undeleteSecretVersions (
    path: string,
    payload: IKv2SecretEngine.IUndeleteSecretVersionsPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_UNDELETE_VERSIONS_PATH.replace(':path', path)),
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
   * Permanently removes the specified version result for the provided key and version numbers
   * from the key-value store.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#destroy-secret-versions
   */
  async destroySecretVersions (
    path: string,
    payload: IKv2SecretEngine.IDestroySecretVersionsPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_DESTROY_VERSIONS_PATH.replace(':path', path)),
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
   * Returns a list of key names at the specified location. Folders are suffixed with /.
   * The input must be a folder; list on a file will not return a value. Note that no policy-based
   * filtering is performed on keys; do not encode sensitive information in key names.
   * The values themselves are not accessible via this command.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#list-secrets
   */
  async listSecrets (
    path: string
  ): Promise<IVaultResponse<IKv2SecretEngine.IListSecretsResponse>> {
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
   * Retrieves the metadata and versions for the secret at the specified path.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#read-secret-metadata
   */
  async readSecretMetadata (
    path: string
  ): Promise<IVaultResponse<IKv2SecretEngine.IReadSecretMetadataResponse>> {
    const res = await this.request(
      this.getAPIUrl(SECRET_READ_METADATA_PATH.replace(':path', path)),
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
   * creates a new version of a secret at the specified location. If the value does not yet exist,
   * the calling token must have an ACL policy granting the create capability. If the value
   * already exists, the calling token must have an ACL policy granting the update capability.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#update-metadata
   */
  async updateSecretMetadata (
    path: string,
    payload: IKv2SecretEngine.IUpdateSecretMetadataPayload
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(SECRET_UPDATE_METADATA_PATH.replace(':path', path)),
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
   * Permanently deletes the key metadata and all version result for the specified key.
   * All version history will be removed.
   * @link https://www.vaultproject.io/api/secret/kv/kv-v2.html#delete-metadata-and-all-versions
   */
  async deleteMetadataAndAllVersions (
    path: string
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(
        SECRET_DELETE_METADATA_AND_ALL_VERS_PATH.replace(':path', path)
      ),
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
