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
    ca: Buffer | string
    /**
     * Client certificate PEM to auth with vault
     */
    cert: Buffer | string
    /**
     * Private key PEM to auth with vault
     */
    key: Buffer | string
  }
}
