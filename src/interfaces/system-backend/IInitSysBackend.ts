export namespace IInitSysBackend {
  export interface IReadInitStatusResponse {
    initialized: boolean
  }

  export interface IStartInitPayload {
    /**
     * Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is
     * preserved. The keys must be base64-encoded from their original binary representation.
     * The size of this array must be the same as secret_shares.
     */
    pgp_keys?: Array<string>
    /**
     * Specifies a PGP public key used to encrypt the initial root token. The key must be
     * base64-encoded from its original binary representation.
     */
    root_token_pgp_key?: string
    /**
     * Specifies the number of shares to split the master key into
     */
    secret_shares: number
    /**
     * Specifies the number of shares required to reconstruct the master key. This must be less
     * than or equal secret_shares. If using Vault HSM with auto-unsealing, this value must be the
     * same as secret_shares.
     */
    secret_threshold: number
  }

  /**
   * Enterprise-only features for vault initialization
   */
  export interface IStartInitEntPayload {
    /**
     * Specifies the number of shares that should be encrypted by the HSM and stored for
     * auto-unsealing. Currently must be the same as secret_shares.
     */
    stored_shares: number

    /**
     * Specifies the number of shares to split the recovery key into.
     */
    recovery_shares: number

    /**
     * Specifies the number of shares required to reconstruct the recovery key. This must
     * be less than or equal to recovery_shares.
     */
    recovery_threshold: number

    /**
     * Specifies an array of PGP public keys used to encrypt the output recovery keys.
     * Ordering is preserved. The keys must be base64-encoded from their original binary
     * representation. The size of this array must be the same as recovery_shares.
     */
    recovery_pgp_keys?: Array<string>
  }

  export interface IStartInitResponse {
    /**
     * Master keys (encrypted if pgp_keys was provided)
     */
    keys: Array<string>
    /**
     * Master keys in base64 format
     */
    keys_base64: Array<string>
    /**
     * Initial root token
     */
    root_token: string
  }
}
