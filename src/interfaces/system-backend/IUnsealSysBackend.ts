export namespace IUnsealSysBackend {
  /**
   * Either the key or reset parameter must be provided;
   * if both are provided, reset takes precedence.
   */
  export interface ISubmitUnsealKeyPayload {
    /**
     * Specifies a single master key share. This is required unless reset is true.
     */
    key?: string
    /**
     * Specifies if previously-provided unseal keys are discarded and the unseal process is reset.
     */
    reset?: boolean
    /**
     * Available in 1.0 - Used to migrate the seal from shamir to autoseal or autoseal to shamir.
     * Must be provided on all unseal key calls.
     */
    migrate?: boolean
  }

  export interface ISubmitUnsealKeyResponse {
    sealed: boolean
    /**
     * Threshold
     */
    t: number
    /**
     * Number of shares
     */
    n: number
    /**
     * Number of successful shares used to unseal
     */
    progress: number
    version: string

    // Additional fields when unsealed
    cluster_name?: string
    cluster_id?: string
  }
}
