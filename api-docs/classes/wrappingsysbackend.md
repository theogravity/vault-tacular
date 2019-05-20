[Vault client for node.js](../README.md) > [WrappingSysBackend](../classes/wrappingsysbackend.md)

# Class: WrappingSysBackend

## Hierarchy

↳  [BaseSysBackend](basesysbackend.md)

**↳ WrappingSysBackend**

## Index

### Constructors

* [constructor](wrappingsysbackend.md#constructor)

### Methods

* [lookup](wrappingsysbackend.md#lookup)
* [rewrap](wrappingsysbackend.md#rewrap)
* [unwrap](wrappingsysbackend.md#unwrap)
* [wrap](wrappingsysbackend.md#wrap)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WrappingSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [WrappingSysBackend](wrappingsysbackend.md)

*Inherited from [BaseSysBackend](basesysbackend.md).[constructor](basesysbackend.md#constructor)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-client/blob/38077d0/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [WrappingSysBackend](wrappingsysbackend.md)

___

## Methods

<a id="lookup"></a>

###  lookup

▸ **lookup**(token: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ILookupResponse](../interfaces/iwrappingsysbackend.ilookupresponse.md)>>

*Defined in [system-backends/WrappingSysBackend.ts:17](https://github.com/theogravity/vault-client/blob/38077d0/src/system-backends/WrappingSysBackend.ts#L17)*

Looks up wrapping properties for the given token.

*__link__*: [https://www.vaultproject.io/api/system/wrapping-lookup.html](https://www.vaultproject.io/api/system/wrapping-lookup.html)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Wrapping token ID |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ILookupResponse](../interfaces/iwrappingsysbackend.ilookupresponse.md)>>

___
<a id="rewrap"></a>

###  rewrap

▸ **rewrap**(token: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IRewrapResponse](../interfaces/iwrappingsysbackend.irewrapresponse.md)>>

*Defined in [system-backends/WrappingSysBackend.ts:47](https://github.com/theogravity/vault-client/blob/38077d0/src/system-backends/WrappingSysBackend.ts#L47)*

Rewraps a response-wrapped token. The new token will use the same creation TTL as the original token and contain the same response. The old token will be invalidated. This can be used for long-term storage of a secret in a response-wrapped token when rotation is a requirement.

*__link__*: [https://www.vaultproject.io/api/system/wrapping-rewrap.html](https://www.vaultproject.io/api/system/wrapping-rewrap.html)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Wrapping token ID |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IRewrapResponse](../interfaces/iwrappingsysbackend.irewrapresponse.md)>>

___
<a id="unwrap"></a>

###  unwrap

▸ **unwrap**(token?: *`string`*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IUnwrapResponse](../interfaces/iwrappingsysbackend.iunwrapresponse.md)>>

*Defined in [system-backends/WrappingSysBackend.ts:85](https://github.com/theogravity/vault-client/blob/38077d0/src/system-backends/WrappingSysBackend.ts#L85)*

Returns the original response inside the given wrapping token. Unlike simply reading cubbyhole/response (which is deprecated), this endpoint provides additional validation checks on the token, returns the original value on the wire rather than a JSON string representation of it, and ensures that the response is properly audit-logged.

This endpoint can be used by using a wrapping token as the client token in the API call, in which case the token parameter is not required; or, a different token with permissions to access this endpoint can make the call and pass in the wrapping token in the token parameter. Do not use the wrapping token in both locations; this will cause the wrapping token to be revoked but the value to be unable to be looked up, as it will basically be a double-use of the token!

*__link__*: [https://www.vaultproject.io/api/system/wrapping-unwrap.html](https://www.vaultproject.io/api/system/wrapping-unwrap.html)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` token | `string` |  Wrapping token ID. This is required if the client token is not the wrapping token. Do not use the wrapping token in both locations. |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IUnwrapResponse](../interfaces/iwrappingsysbackend.iunwrapresponse.md)>>

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(wrapTtl: *`number` \| `string`*, payload: *[IWrapPayload](../interfaces/iwrappingsysbackend.iwrappayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IWrapResponse](../interfaces/iwrappingsysbackend.iwrapresponse.md)>>

*Defined in [system-backends/WrappingSysBackend.ts:116](https://github.com/theogravity/vault-client/blob/38077d0/src/system-backends/WrappingSysBackend.ts#L116)*

wraps the given user-supplied result inside a response-wrapped token.

*__link__*: [https://www.vaultproject.io/api/system/wrapping-wrap.html](https://www.vaultproject.io/api/system/wrapping-wrap.html)

**Parameters:**

| Name | Type |
| ------ | ------ |
| wrapTtl | `number` \| `string` |
| payload | [IWrapPayload](../interfaces/iwrappingsysbackend.iwrappayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[IWrapResponse](../interfaces/iwrappingsysbackend.iwrapresponse.md)>>

___

