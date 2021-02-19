[Vault client for node.js](../README.md) › [Globals](../globals.md) › [WrappingSysBackend](wrappingsysbackend.md)

# Class: WrappingSysBackend

## Hierarchy

  ↳ [BaseSysBackend](basesysbackend.md)

  ↳ **WrappingSysBackend**

## Index

### Constructors

* [constructor](wrappingsysbackend.md#constructor)

### Methods

* [lookup](wrappingsysbackend.md#lookup)
* [rewrap](wrappingsysbackend.md#rewrap)
* [unwrap](wrappingsysbackend.md#unwrap)
* [wrap](wrappingsysbackend.md#wrap)

## Constructors

###  constructor

\+ **new WrappingSysBackend**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `authToken?`: [AuthTokenParam](../globals.md#authtokenparam)): *[WrappingSysBackend](wrappingsysbackend.md)*

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Overrides void*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) | The URL to the Vault API including the version path |
`authToken?` | [AuthTokenParam](../globals.md#authtokenparam) | - |

**Returns:** *[WrappingSysBackend](wrappingsysbackend.md)*

## Methods

###  lookup

▸ **lookup**(`token`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupResponse](../globals.md#ilookupresponse)››*

*Defined in [system-backends/WrappingSysBackend.ts:17](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/system-backends/WrappingSysBackend.ts#L17)*

Looks up wrapping properties for the given token.

**`link`** https://www.vaultproject.io/api/system/wrapping-lookup.html

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | Wrapping token ID  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupResponse](../globals.md#ilookupresponse)››*

___

###  rewrap

▸ **rewrap**(`token`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRewrapResponse](../globals.md#irewrapresponse)››*

*Defined in [system-backends/WrappingSysBackend.ts:47](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/system-backends/WrappingSysBackend.ts#L47)*

Rewraps a response-wrapped token. The new token will use the same creation TTL as the
original token and contain the same response. The old token will be invalidated.
This can be used for long-term storage of a secret in a response-wrapped token
when rotation is a requirement.

**`link`** https://www.vaultproject.io/api/system/wrapping-rewrap.html

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | Wrapping token ID  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRewrapResponse](../globals.md#irewrapresponse)››*

___

###  unwrap

▸ **unwrap**(`token?`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IUnwrapResponse](../globals.md#iunwrapresponse)››*

*Defined in [system-backends/WrappingSysBackend.ts:85](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/system-backends/WrappingSysBackend.ts#L85)*

Returns the original response inside the given wrapping token. Unlike simply reading
cubbyhole/response (which is deprecated), this endpoint provides additional validation
checks on the token, returns the original value on the wire rather than a JSON string
representation of it, and ensures that the response is properly audit-logged.

This endpoint can be used by using a wrapping token as the client token in the API call,
in which case the token parameter is not required; or, a different token with permissions
to access this endpoint can make the call and pass in the wrapping token in the token
parameter. Do not use the wrapping token in both locations; this will cause the wrapping
token to be revoked but the value to be unable to be looked up, as it will basically be a
double-use of the token!

**`link`** https://www.vaultproject.io/api/system/wrapping-unwrap.html

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token?` | string | Wrapping token ID. This is required if the client token is not the wrapping token. Do not use the wrapping token in both locations.  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IUnwrapResponse](../globals.md#iunwrapresponse)››*

___

###  wrap

▸ **wrap**(`wrapTtl`: number | string, `payload`: [IWrapPayload](../globals.md#iwrappayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IWrapResponse](../globals.md#iwrapresponse)››*

*Defined in [system-backends/WrappingSysBackend.ts:116](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/system-backends/WrappingSysBackend.ts#L116)*

wraps the given user-supplied result inside a response-wrapped token.

**`link`** https://www.vaultproject.io/api/system/wrapping-wrap.html

**Parameters:**

Name | Type |
------ | ------ |
`wrapTtl` | number &#124; string |
`payload` | [IWrapPayload](../globals.md#iwrappayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IWrapResponse](../globals.md#iwrapresponse)››*
