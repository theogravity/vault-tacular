import { BaseAuth } from './BaseAuth'
import {
  BaseUrl,
  IBaseClientConfig,
  ISecret,
  IVaultResponse
} from '../interfaces/IBaseClient'
import { ITokenAuth } from '../interfaces/auth-methods/ITokenAuth'

const DEFAULT_MOUNT_POINT = '/auth/token'
const LIST_ACCESSORS_PATH = '/accessors'
const CREATE_TOKEN_PATH = '/create'
const CREATE_ORPHAN_TOKEN_PATH = '/create-orphan'
const CREATE_TOKEN_WITH_ROLE_PATH = '/create/:role_name'
const LOOKUP_TOKEN_PATH = '/lookup'
const LOOKUP_TOKEN_SELF_PATH = '/lookup-self'
const LOOKUP_ACCESSOR_PATH = '/lookup-accessor'
const RENEW_TOKEN_PATH = '/renew'
const RENEW_TOKEN_SELF_PATH = '/renew-self'
const REVOKE_TOKEN_PATH = '/revoke'
const REVOKE_TOKEN_SELF_PATH = '/revoke-self'
const REVOKE_ACCESSOR_PATH = '/revoke-accessor'
const REVOKE_ORPHAN_AND_CHILDREN_PATH = '/revoke-orphan'
const READ_TOKEN_ROLE_PATH = '/roles/:role_name'
const LIST_TOKEN_ROLES_PATH = '/roles'
const UPSERT_TOKEN_ROLE_PATH = '/roles/:role_name'
const DELETE_TOKEN_ROLE_PATH = '/roles/:role_name'
const TIDY_TOKEN_PATH = '/token/tidy'

/**
 * Username and password-based auth
 */
export class TokenAuth extends BaseAuth {
  constructor (baseUrl: BaseUrl, config?: IBaseClientConfig) {
    super(baseUrl, config)

    if (!this.config.mount) {
      this.config.mount = DEFAULT_MOUNT_POINT
    }
  }

  /**
   * lists token accessors. This requires sudo capability, and access to it should be tightly
   * controlled as the accessors can be used to revoke very large numbers of tokens and their
   * associated leases at once.
   * @link https://www.vaultproject.io/api/auth/token/index.html#list-accessors
   */
  async listAccessors (): Promise<
    IVaultResponse<ITokenAuth.IListAccessorsResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(LIST_ACCESSORS_PATH),
      {
        method: 'LIST'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Creates a new token.
   * @link https://www.vaultproject.io/api/auth/token/index.html#create-token
   */
  async createToken (
    payload: ITokenAuth.ICreateTokenPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(CREATE_TOKEN_PATH),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Creates a new orphan token.
   * @link https://www.vaultproject.io/api/auth/token/index.html#create-token
   */
  async createOrphanToken (
    payload: ITokenAuth.ICreateTokenPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(CREATE_ORPHAN_TOKEN_PATH),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Create a token with a role.
   * @link https://www.vaultproject.io/api/auth/token/index.html#create-token
   *
   * @parma roleName The name of the token role.
   */
  async createTokenWithRole (
    roleName: string,
    payload: ITokenAuth.ICreateTokenPayload
  ): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(
        CREATE_TOKEN_WITH_ROLE_PATH.replace(':role_name', roleName)
      ),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Returns information about the client token.
   * @link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token
   *
   * @param token Token to lookup.
   */
  async lookupToken (
    token: string
  ): Promise<IVaultResponse<ITokenAuth.ILookupTokenResponse>> {
    const res = await this.request(
      this.getAPIUrl(LOOKUP_TOKEN_PATH),
      {
        method: 'POST',
        json: {
          token
        }
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Returns information about the current client token.
   *
   * @link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-self-
   */
  async lookupTokenSelf (): Promise<
    IVaultResponse<ITokenAuth.ILookupTokenResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(LOOKUP_TOKEN_SELF_PATH),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Returns information about the client token from the accessor.
   * @link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-accessor
   *
   * @param accessor Token accessor to lookup.
   */
  async lookupTokenByAccessor (
    accessor: string
  ): Promise<IVaultResponse<ITokenAuth.ILookupTokenAccessorResponse>> {
    const res = await this.request(
      this.getAPIUrl(LOOKUP_ACCESSOR_PATH),
      {
        method: 'POST',
        json: {
          accessor
        }
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Renews a lease associated with a token. This is used to prevent the expiration of a token,
   * and the automatic revocation of it. Token renewal is possible only if there is a
   * lease associated with it.
   * @link https://www.vaultproject.io/api/auth/token/index.html#renew-a-token
   * @param token Token to renew.
   */
  async renewToken (
    token: string,
    payload: ITokenAuth.IRenewTokenPayload = {}
  ): Promise<IVaultResponse<ITokenAuth.IRenewTokenResponse>> {
    const res = await this.request(
      this.getAPIUrl(RENEW_TOKEN_PATH),
      {
        method: 'POST',
        json: {
          token,
          ...payload
        }
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Renews a lease associated with the calling token. This is used to prevent the expiration of
   * a token, and the automatic revocation of it. Token renewal is possible only if there is a
   * lease associated with it.
   *
   * @link https://www.vaultproject.io/api/auth/token/index.html#renew-a-token-self-
   */
  async renewTokenSelf (
    payload: ITokenAuth.IRenewTokenPayload = {}
  ): Promise<IVaultResponse<ITokenAuth.IRenewTokenResponse>> {
    const res = await this.request(
      this.getAPIUrl(RENEW_TOKEN_SELF_PATH),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Revokes a token and all child tokens. When the token is revoked, all dynamic secrets generated
   * with it are also revoked.
   * @link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token
   *
   * @param token Token to revoke
   */
  async revokeToken (token: string): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(REVOKE_TOKEN_PATH),
      {
        method: 'POST',
        json: {
          token
        }
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Revokes the token used to call it and all child tokens. When the token is revoked, all dynamic
   * secrets generated with it are also revoked.
   * @link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-self-
   */
  async revokeTokenSelf (): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(REVOKE_TOKEN_SELF_PATH),
      {
        method: 'POST'
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Revoke the token associated with the accessor and all the child tokens.
   * This is meant for purposes where there is no access to token ID but there is need to
   * revoke a token and its children.
   *
   * @link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-accessor
   *
   * @param accessor Accessor of the token.
   */
  async revokeTokenByAccessor (
    accessor: string
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(REVOKE_ACCESSOR_PATH),
      {
        method: 'POST',
        json: {
          accessor
        }
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Revokes a token but not its child tokens. When the token is revoked, all secrets generated
   * with it are also revoked. All child tokens are orphaned, but can be revoked sub-sequently
   * using revokeToken(). This is a root-protected endpoint.
   *
   * @link https://www.vaultproject.io/api/auth/token/index.html#revoke-token-and-orphan-children
   *
   * @param token Token to revoke.
   */
  async revokeTokenAndOprhanChildren (
    token: string
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(REVOKE_ORPHAN_AND_CHILDREN_PATH),
      {
        method: 'POST',
        json: {
          token
        }
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * Fetches the named role configuration.
   * @link https://www.vaultproject.io/api/auth/token/index.html#read-token-role
   * @param roleName The name of the token role
   */
  async readTokenRole (
    roleName: string
  ): Promise<IVaultResponse<ITokenAuth.IReadTokenRoleResponse>> {
    const res = await this.request(
      this.getAPIUrl(READ_TOKEN_ROLE_PATH.replace(':role_name', roleName)),
      {
        method: 'GET'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * List available token roles.
   * @link https://www.vaultproject.io/api/auth/token/index.html#list-token-roles
   */
  async listTokenRoles (): Promise<
    IVaultResponse<ITokenAuth.IListTokenRolesResponse>
  > {
    const res = await this.request(
      this.getAPIUrl(LIST_TOKEN_ROLES_PATH),
      {
        method: 'LIST'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }

  /**
   * Creates (or replaces) the named role. Roles enforce specific behavior when creating tokens
   * that allow token functionality that is otherwise not available or would require sudo/root
   * privileges to access. Role parameters, when set, override any provided options to the create
   * endpoints. The role name is also included in the token path, allowing all tokens created
   * against a role to be revoked using the /sys/leases/revoke-prefix endpoint.
   * @link https://www.vaultproject.io/api/auth/token/index.html#create-update-token-role
   *
   * @param roleName The name of the token role.
   */
  async createOrUpdateTokenRole (
    roleName: string,
    payload: ITokenAuth.IUpsertTokenRolePayload = {}
  ): Promise<IVaultResponse<void>> {
    await this.request(
      this.getAPIUrl(UPSERT_TOKEN_ROLE_PATH.replace(':role_name', roleName)),
      {
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return
  }

  /**
   * This endpoint deletes the named token role.
   * @link https://www.vaultproject.io/api/auth/token/index.html#delete-token-role
   *
   * @param roleName The name of the token role.
   */
  async deleteTokenRole (roleName: string) {
    const res = await this.request(
      this.getAPIUrl(DELETE_TOKEN_ROLE_PATH.replace(':role_name', roleName)),
      {
        method: 'DELETE'
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode
    }
  }

  /**
   * Performs some maintenance tasks to clean up invalid entries that may remain in the token store.
   * Generally, running this is not needed unless upgrade notes or support personnel suggest it.
   * This may perform a lot of I/O to the storage method so should be used sparingly.
   */
  async tidyTokens (): Promise<IVaultResponse<ISecret>> {
    const res = await this.request(
      this.getAPIUrl(TIDY_TOKEN_PATH),
      {
        method: 'POST'
      },
      {
        authRequired: true
      }
    )

    return {
      result: res.body
    }
  }
}
