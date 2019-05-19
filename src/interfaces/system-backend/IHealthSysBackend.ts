export namespace IHealthSysBackend {
  export interface IReadHealthInfoPayload {
    /**
     * Specifies if being a standby should still return the active status code instead of the
     * standby status code. This is useful when Vault is behind a non-configurable load balance
     * that just wants a 200-level response. This will not apply if the node is a performance
     * standby.
     */
    standbyok?: boolean
    /**
     * Specifies if being a performance standby should still return the active status code instead
     * of the performance standby status code. This is useful when Vault is behind a
     * non-configurable load balance that just wants a 200-level response.
     */
    perfstandbyok?: boolean
    /**
     * Specifies the status code that should be returned for an active node.
     */
    activecode?: number
    /**
     * Specifies the status code that should be returned for a standby node.
     */
    standbycode?: number
    /**
     * Specifies the status code that should be returned for a DR secondary node.
     */
    drsecondarycode?: number
    /**
     * Specifies the status code that should be returned for a performance standby node.
     */
    performancestandbycode?: number
    /**
     * Specifies the status code that should be returned for a sealed node.
     */
    sealedcode?: number
    /**
     * Specifies the status code that should be returned for a uninitialized node.
     */
    uninitcode?: number
  }

  /**
   * Note: replication_perf_mode and replication_dr_mode reflect the state of the active node in
   * the cluster; if you are querying it for a standby that has just come up, it can take a small
   * time for the active node to inform the standby of its status.
   */
  export interface IReadHealthInfoResponse {
    initialized: boolean
    sealed: boolean
    standby: boolean
    performance_standby: boolean
    replication_perf_mode: string
    replication_dr_mode: string
    server_time_utc: number
    version: string
    cluster_name: string
    cluster_id: string
  }
}
