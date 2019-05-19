import { IBaseLoginPayload } from './IBaseAuth'

export namespace IUserPassAuth {
  export interface IUpsertPayload {
    /**
     * The password for the user. Only required when creating the user
     */
    password: string
    /**
     * Comma-separated list of policies. If set to empty string,
     * only the default policy will be applicable to the user.
     */
    policies?: string
    /**
     * The lease duration which decides login expiration
     */
    ttl?: string
    /**
     * Maximum duration after which login should expire
     */
    max_ttl?: string
    /**
     * If set, restricts usage of the login and token to client
     * IPs falling within the range of the specified CIDR(s).
     */
    bound_cidrs?: string | Array<string>
  }

  export interface ILoginPayload extends IBaseLoginPayload {
    /**
     * The password for the user
     */
    password: string
  }
}
