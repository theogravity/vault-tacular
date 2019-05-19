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
}

/**
 * Authentication token to access the API
 */
export type VaultToken = string

/**
 * Vault API base url
 */
export type BaseUrl = string
