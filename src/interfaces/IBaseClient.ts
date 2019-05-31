import { RequestPromiseOptions } from 'request-promise-native'

/**
 * Configuration parameters for client initialization
 */
export interface IBaseClientConfig {
  /**
   * Auth method mount point
   */
  mount?: string
  /**
   * Namespace path (Vault Enterprise feature)
   * @link https://www.vaultproject.io/docs/enterprise/namespaces/index.html
   */
  namespace?: string
  /**
   * Additional request module options
   * @link https://www.npmjs.com/package/request
   */
  reqOpts?: RequestPromiseOptions
  /**
   * The token value, or an (async) function that returns the token used for the
   * Authorization / X-Vault-Token header. The client does *not* cache the result;
   * the function should implement caching and renewal of the token if necessary.
   */
  authToken?: string | Function
}

/**
 * Authentication token to access the API
 */
export type VaultToken = string

export type VaultWarnings = Array<string>

/**
 * Vault API base url
 */
export type BaseUrl = string

export interface IVaultResponse<T> {
  result?: T
}

/**
 * Auth information for the secret
 */
export interface ISecretAuth {
  /**
   * Is the auth renewable?
   */
  renewable: boolean
  /**
   * Number of seconds the token is valid
   */
  lease_duration: number
  /**
   * Metadata for the auth
   */
  metadata: object
  /**
   * Policies attached to the auth
   */
  policies: Array<string>
  /**
   * Accessor of the token
   */
  accessor: string
  /**
   * Token for this auth
   */
  client_token: string
  token_policies: Array<string>
  entity_id: string
  token_type: string
  orphan: boolean
}

/**
 * Represents a secret from Vault
 */
export interface ISecret {
  request_id: string
  /**
   * When reading a dynamic secret, such as via vault read, Vault always returns a lease_id.
   * This is the ID used with commands such as vault renew and vault revoke to manage the
   * lease of the secret.
   */
  lease_id: string
  /**
   * Along with the lease ID, a lease duration can be read.
   * The lease duration is a Time To Live value: the time in seconds for
   * which the lease is valid. A consumer of this secret must renew the lease within that time.
   */
  lease_duration: number
  /**
   * Secret-related result
   */
  data?: object
  /**
   * List of warnings
   */
  warnings: VaultWarnings
  wrap_info?: IWrapInfo
  /**
   * If the lease is renewable
   */
  renewable: boolean
  auth?: ISecretAuth
}

/**
 * Response-wrapped token result
 */
export interface IWrapInfo {
  /**
   * The time that the response-wrapping token was created
   */
  creation_time: string
  /**
   * The actual token value
   */
  token: string
  /**
   * The TTL of the response-wrapping token itself
   */
  ttl: number
  /**
   * If the wrapped response is an authentication response containing a Vault token,
   * this is the value of the wrapped token's accessor. This is useful for orchestration
   * systems (such as Nomad) to able to control the lifetime of secrets based on their
   * knowledge of the lifetime of jobs, without having to actually unwrap the response-wrapping
   * token or gain knowledge of the token ID inside.
   */
  wrapped_accessor: string
}

export interface IClientReqParams {
  /**
   * True if the Authorization / X-Vault-Token header needs to be set
   */
  authRequired?: boolean
}
