export namespace IKv1SecretEngine {
  export interface IReadSecretResponse {
    auth: string
    data: {
      [key: string]: any
    }
    lease_duration: number
    lease_id: string
    renewable: boolean
  }

  export interface IListSecretsResponse {
    auth: string
    data: {
      keys: Array<string>
    }
    lease_duration: number
    lease_id: string
    renewable: boolean
  }

  export interface ICreateOrUpdateSecretPayload {
    [key: string]: any
  }
}
