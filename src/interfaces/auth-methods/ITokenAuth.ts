import { ISecret, ISecretAuth } from '../IBaseClient'

export namespace ITokenAuth {
  export interface IListAccessorsResponse extends ISecret {
    data: {
      keys: Array<string>
    }
  }

  export interface ICreateTokenPayload {
    /**
     * The ID of the client token. Can only be specified by a root token. Otherwise,
     * the token ID is a randomly generated value.
     */
    id?: string

    /**
     * A list of policies for the token. This must be a subset of the policies belonging to the
     * token making the request, unless root. If not specified, defaults to all the policies
     * of the calling token.
     */
    policies?: Array<string>

    /**
     * A map of string to string valued metadata. This is passed through to the audit devices.
     */
    meta?: {
      [key: string]: string
    }

    /**
     * If true and set by a root caller, the token will not have the parent token of the caller.
     * This creates a token with no parent.
     */
    no_parent?: boolean

    /**
     * If true the default policy will not be contained in this token's policy set.
     */
    no_default_policy?: boolean

    /**
     * Set to false to disable the ability of the token to be renewed past its initial TTL.
     * Setting the value to true will allow the token to be renewable up to the system/mount
     * maximum TTL.
     *
     * @default true
     */
    renewable?: boolean

    /**
     * The TTL period of the token, provided as "1h", where hour is the largest suffix.
     * If not provided, the token is valid for the default lease TTL,
     * or indefinitely if the root policy is used.
     */
    ttl?: string

    /**
     * If set, the token will have an explicit max TTL set upon it. This maximum token TTL
     * cannot be changed later, and unlike with normal tokens, updates to the system/mount
     * max TTL value will have no effect at renewal time -- the token will never be able to
     * be renewed or used past the value set at issue time.
     */
    explicit_max_ttl?: string

    /**
     * The display name of the token.
     * @default "token"
     */
    display_name?: string

    /**
     * The maximum uses for the given token.
     * This can be used to create a one-time-token or limited use token.
     * The value of 0 has no limit to the number of uses.
     */
    num_uses?: number

    /**
     * If specified, the token will be periodic; it will have no maximum TTL
     * (unless an "explicit-max-ttl" is also set) but every renewal will use the given period.
     * Requires a root/sudo token to use.
     */
    period?: string
  }

  interface ILookupTokenRes extends ISecretAuth {
    /**
     * Not defined in this structure
     */
    metadata: never

    creation_time: string
    creation_ttl: number
    display_name: string
    expire_time: string
    explicit_max_ttl: number
    id: string
    identity_policies: Array<string>
    issue_time: string
    meta: object
    num_uses: number
    path: string
    ttl: number
  }

  export interface ILookupTokenResponse {
    data: ILookupTokenRes
  }

  export interface ILookupTokenAccessorResponse extends ILookupTokenResponse {}

  export interface IRenewTokenPayload {
    /**
     * An optional requested lease increment can be provided. This increment may be ignored.
     */
    increment?: string
  }

  export interface IRenewTokenResponse {
    auth: ISecretAuth
  }

  export interface IReadTokenRoleResponse extends ISecret {
    wrap_info: never
    auth: never
    data: {
      allowed_policies: Array<string>
      disallowed_policies: Array<string>
      explicit_max_ttl: number
      name: string
      orphan: boolean
      path_suffix: boolean
      period: number
      renewable: boolean
    }
  }

  export interface IListTokenRolesResponse {
    data: {
      keys: Array<string>
    }
  }

  export interface IUpsertTokenRolePayload {
    /**
     * If set, tokens can be created with any subset of the policies in this list, rather than
     * the normal semantics of tokens being a subset of the calling token's policies.
     * The parameter is a comma-delimited string of policy names. If at creation time
     * no_default_policy is not set and "default" is not contained in disallowed_policies,
     * the "default" policy will be added to the created token automatically.
     */
    allowed_policies?: Array<string>
    /**
     *  If set, successful token creation via this role will require that no policies in the given
     *  list are requested. The parameter is a comma-delimited string of policy names. Adding
     *  "default" to this list will prevent "default" from being added automatically to created
     *  tokens.
     */
    disallowed_policies?: Array<string>
    /**
     * If true, tokens created against this policy will be orphan tokens (they will have no parent).
     * As such, they will not be automatically revoked by the revocation of any other token.
     */
    orphan?: boolean
    /**
     * If specified, the token will be periodic; it will have no maximum TTL
     * (unless an "explicit-max-ttl" is also set) but every renewal will use the given period.
     * Requires a root/sudo token to use.
     */
    period?: string
    /**
     * Set to false to disable the ability of the token to be renewed past its initial TTL.
     * Setting the value to true will allow the token to be renewable up to the system/mount
     * maximum TTL.
     * @default true
     */
    renewable?: boolean
    /**
     * Provides a maximum lifetime for any tokens issued against this role, including periodic
     * tokens. Unlike direct token creation, where the value for an explicit max TTL is stored in
     * the token, for roles this check will always use the current value set in the role.
     * The main use of this is to provide a hard upper bound on periodic tokens, which otherwise
     * can live forever as long as they are renewed. This is an integer number of seconds.
     */
    explicit_max_ttl?: number
    /**
     * If set, tokens created against this role will have the given suffix as part of their path in
     * addition to the role name. This can be useful in certain scenarios, such as keeping the same
     * role name in the future but revoking all tokens created against it before some point in time.
     * The suffix can be changed, allowing new callers to have the new suffix as part of their path,
     * and then tokens with the old suffix can be revoked via /sys/leases/revoke-prefix.
     */
    path_suffix?: string
    /**
     * If set, restricts usage of the generated token to client IPs falling within the range of the
     * specified CIDR(s). Unlike most other role parameters, this is not reevaluated from the
     * current role value at each usage; it is set on the token itself. Root tokens with no TTL
     * will not be bound by these CIDRs; root tokens with TTLs will be bound by these CIDRs.
     */
    bound_cidrs?: string | Array<string>
    /**
     *  Specifies the type of tokens that should be returned by the role. If either service or
     *  batch is specified, that kind of token will always be returned. If default-service, service
     *  tokens will be returned unless the client requests a batch type token at token creation
     *  time. If default-batch, batch tokens will be returned unless the client requests a service
     *  type token at token creation time.
     */
    token_type?: string
  }
}
