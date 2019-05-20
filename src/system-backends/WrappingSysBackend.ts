import { BaseSysBackend } from './BaseSysBackend'
import { IVaultResponse } from '../interfaces/IBaseClient'
import { IWrappingSysBackend } from '../interfaces/system-backend/IWrappingSysBackend'

const WRAPPING_LOOKUP_PATH = '/sys/wrapping/lookup'
const WRAPPING_REWRAP_PATH = '/sys/wrapping/rewrap'
const WRAPPING_UNWRAP_PATH = '/sys/wrapping/unwrap'
const WRAPPING_WRAP_PATH = '/sys/wrapping/wrap'

export class WrappingSysBackend extends BaseSysBackend {
  /**
   * Looks up wrapping properties for the given token.
   * @link https://www.vaultproject.io/api/system/wrapping-lookup.html
   *
   * @param token Wrapping token ID
   */
  async lookup (
    token: string
  ): Promise<IVaultResponse<IWrappingSysBackend.ILookupResponse>> {
    const res = await this.request(
      this.getAPIUrl(WRAPPING_LOOKUP_PATH),
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
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Rewraps a response-wrapped token. The new token will use the same creation TTL as the
   * original token and contain the same response. The old token will be invalidated.
   * This can be used for long-term storage of a secret in a response-wrapped token
   * when rotation is a requirement.
   * @link https://www.vaultproject.io/api/system/wrapping-rewrap.html
   *
   * @param token Wrapping token ID
   */
  async rewrap (
    token: string
  ): Promise<IVaultResponse<IWrappingSysBackend.IRewrapResponse>> {
    const res = await this.request(
      this.getAPIUrl(WRAPPING_REWRAP_PATH),
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
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * Returns the original response inside the given wrapping token. Unlike simply reading
   * cubbyhole/response (which is deprecated), this endpoint provides additional validation
   * checks on the token, returns the original value on the wire rather than a JSON string
   * representation of it, and ensures that the response is properly audit-logged.
   *
   * This endpoint can be used by using a wrapping token as the client token in the API call,
   * in which case the token parameter is not required; or, a different token with permissions
   * to access this endpoint can make the call and pass in the wrapping token in the token
   * parameter. Do not use the wrapping token in both locations; this will cause the wrapping
   * token to be revoked but the value to be unable to be looked up, as it will basically be a
   * double-use of the token!
   * @link https://www.vaultproject.io/api/system/wrapping-unwrap.html
   *
   * @param token Wrapping token ID. This is required if the client token is not the wrapping token.
   * Do not use the wrapping token in both locations.
   */
  async unwrap (
    token?: string
  ): Promise<IVaultResponse<IWrappingSysBackend.IUnwrapResponse>> {
    let body = {}

    if (token) {
      body = {
        token
      }
    }

    const res = await this.request(
      this.getAPIUrl(WRAPPING_UNWRAP_PATH),
      {
        method: 'POST',
        body
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }

  /**
   * wraps the given user-supplied data inside a response-wrapped token.
   * @link https://www.vaultproject.io/api/system/wrapping-wrap.html
   */
  async wrap (
    wrapTtl: number | string,
    payload: IWrappingSysBackend.IWrapPayload
  ): Promise<IVaultResponse<IWrappingSysBackend.IWrapResponse>> {
    const res = await this.request(
      this.getAPIUrl(WRAPPING_WRAP_PATH),
      {
        headers: {
          'X-Vault-Wrap-TTL': wrapTtl
        },
        method: 'POST',
        json: payload
      },
      {
        authRequired: true
      }
    )

    return {
      statusCode: res.statusCode,
      data: res.body
    }
  }
}
