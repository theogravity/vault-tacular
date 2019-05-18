import { IBaseLoginPayload } from './IBaseAuth'

export namespace ITlsCertificateAuth {
  export interface ILoginPayload extends IBaseLoginPayload {
    /**
     * Authenticate against only the named certificate role,
     * returning its policy list if successful.
     * If not set, defaults to trying all certificate
     * roles and returning any one that matches.
     */
    name: string
    /**
     * Certificate authority PEM to auth with vault
     */
    ca: Buffer
    /**
     * Client certificate PEM to auth with vault
     */
    cert: Buffer
    /**
     * Private key PEM to auth with vault
     */
    key: Buffer
  }

  export interface ICreateRolePayload {
    /**
     * The name of the certificate role
     */
    name: string
    /**
     * The PEM-format CA certificate
     */
    certificate: string
    /**
     * Constrain the Common Names in the client certificate with a globbed pattern.
     * Value is a comma-separated list of patterns. Authentication requires at least
     * one Name matching at least one pattern. If not set, defaults to allowing all names.
     */
    allowed_common_names?: string | Array<string>
    /**
     * Constrain the Alternative Names in the client certificate with a globbed pattern.
     * Value is a comma-separated list of patterns. Authentication requires at least
     * one DNS matching at least one pattern. If not set, defaults to allowing all dns.
     */
    allowed_dns_names?: string | Array<string>
    /**
     * Constrain the Alternative Names in the client certificate with a globbed pattern.
     * Value is a comma-separated list of patterns. Authentication requires at least one
     * Email matching at least one pattern. If not set, defaults to allowing all emails.
     */
    allowed_email_sans?: string | Array<string>
    /**
     * Constrain the Alternative Names in the client certificate with a globbed pattern.
     * Value is a comma-separated list of URI patterns. Authentication requires at least
     * one URI matching at least one pattern. If not set, defaults to allowing all URIs.
     */
    allowed_uri_sans?: string | Array<string>
    /**
     *  Constrain the Organizational Units (OU) in the client certificate with a globbed pattern.
     *  Value is a comma-separated list of OU patterns. Authentication requires at least one OU
     *  matching at least one pattern. If not set, defaults to allowing all OUs.
     */
    allowed_organizational_units?: string | Array<string>
    /**
     * Require specific Custom Extension OIDs to exist and match the pattern.
     * Value is a comma separated string or array of oid:value. Expects the extension
     * value to be some type of ASN1 encoded string. All conditions must be met.
     * Supports globbing on value.
     */
    required_extensions?: string | Array<string>
    /**
     * A comma-separated list of policies to set on tokens issued when authenticating against
     * this CA certificate.
     */
    policies?: string
    /**
     * The display_name to set on tokens issued when authenticating against this CA certificate.
     * If not set, defaults to the name of the role.
     */
    display_name?: string
    /**
     * The TTL of the token, provided in either number of seconds (3600) or a time duration (1h).
     * If not provided, the token is valid for the the mount or system default TTL time,
     * in that order.
     */
    ttl?: string
    /**
     * Duration in either number of seconds (3600) or a time duration (1h) after which the issued
     * token can no longer be renewed.
     */
    max_ttl?: string
    /**
     * Duration in either number of seconds (3600) or a time duration (1h). If set, the generated
     * token is a periodic token; so long as it is renewed it never expires unless max_ttl is also
     * set, but the TTL set on the token at each renewal is fixed to the value specified here.
     * If this value is modified, the token will pick up the new value at its next renewal.
     */
    period?: string
    /**
     * If set, restricts usage of the certificates to client IPs falling within
     * the range of the specified CIDR(s).
     */
    bound_cidrs?: string | Array<string>
  }
}
