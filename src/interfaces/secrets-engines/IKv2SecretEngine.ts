export namespace IKv2SecretEngine {
  export interface ISetConfigPayload {
    /**
     * The number of versions to keep per key. This value applies to all keys, but a key's metadata
     * setting can overwrite this value. Once a key has more than the configured allowed versions
     * the oldest version will be permanently deleted. Defaults to 10.
     */
    max_versions?: number
    /**
     * If true all keys will require the cas parameter to be set on all write requests.
     */
    cas_required?: boolean
  }

  export interface IGetConfigResponse extends ISetConfigPayload {}

  export interface IReadSecretVersionPayload {
    /**
     * Specifies the version to return. If not set the latest version is returned.
     */
    version?: number
  }

  export interface IReadSecretVersionResponse {
    data: object
    metadata: {
      created_time: string
      deletion_time: string
      destroyed: boolean
      version: number
    }
  }

  export interface ICreateUpdateSecretPayload {
    /**
     * The contents of the data map will be stored and returned on read
     */
    data: {
      [key: string]: any
    }
    /**
     * An object that holds option settings
     */
    options?: {
      /**
       * Set the "cas" value to use a Check-And-Set operation. If not set the write will be
       * allowed. If set to 0 a write will only be allowed if the key doesn’t exist.
       * If the index is non-zero the write will only be allowed if the key’s
       * current version matches the version specified in the cas parameter.
       */
      cas?: number
    }
  }

  export interface ICreateUpdateSecretResponse {
    data: {
      created_time: string
      deletion_time: string
      destroyed: boolean
      version: number
    }
  }

  export interface IDeleteSecretVersionsPayload {
    /**
     * The versions to be deleted. The versioned data will not be deleted, but it will no longer be
     * returned in normal get requests.
     */
    versions: number[]
  }

  export interface IUndeleteSecretVersionsPayload {
    /**
     * The versions to undelete. The versions will be restored and their data will be returned
     * on normal get requests.
     */
    versions: number[]
  }

  export interface IDestroySecretVersionsPayload {
    /**
     * The versions to destroy. Their data will be permanently deleted.
     */
    versions: number[]
  }

  export interface IListSecretsResponse {
    data: {
      keys: Array<string>
    }
  }

  export interface IReadSecretMetadataResponse {
    data: {
      created_time: string
      current_version: number
      max_versions: number
      oldest_version: number
      updated_time: string
      versions: {
        [version: string]: {
          created_time: string
          deletion_time: string
          destroyed: boolean
        }
      }
    }
  }

  export interface IUpdateSecretMetadataPayload {
    /**
     * The number of versions to keep per key. If not set, the backend’s configured max
     * version is used. Once a key has more than the configured allowed versions the oldest
     * version will be permanently deleted.
     */
    max_versions?: number
    /**
     * If true the key will require the cas parameter to be set on all write requests. If false,
     * the backend’s configuration will be used.
     */
    cas_required?: boolean
  }
}
