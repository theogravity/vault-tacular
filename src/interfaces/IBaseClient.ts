/**
 * Configuration parameters for client initialization
 */
export interface IBaseClientConfig {
  /**
   * Vault API url base
   */
  baseUrl: string
  /**
   * Auth method mount point
   */
  mount?: string
  /**
   * Custom logger
   */
  logger?: Partial<Console>
}

/**
 * Authentication token to access the API
 */
export type VaultToken = string
