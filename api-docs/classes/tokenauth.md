[Vault client for node.js](../README.md) › [Globals](../globals.md) › [TokenAuth](tokenauth.md)

# Class: TokenAuth

Username and password-based auth

## Hierarchy

  ↳ [BaseAuth](baseauth.md)

  ↳ **TokenAuth**

## Index

### Constructors

* [constructor](tokenauth.md#constructor)

### Methods

* [createOrUpdateTokenRole](tokenauth.md#createorupdatetokenrole)
* [createOrphanToken](tokenauth.md#createorphantoken)
* [createToken](tokenauth.md#createtoken)
* [createTokenWithRole](tokenauth.md#createtokenwithrole)
* [deleteTokenRole](tokenauth.md#deletetokenrole)
* [listAccessors](tokenauth.md#listaccessors)
* [listTokenRoles](tokenauth.md#listtokenroles)
* [lookupToken](tokenauth.md#lookuptoken)
* [lookupTokenByAccessor](tokenauth.md#lookuptokenbyaccessor)
* [lookupTokenSelf](tokenauth.md#lookuptokenself)
* [readTokenRole](tokenauth.md#readtokenrole)
* [renewToken](tokenauth.md#renewtoken)
* [renewTokenSelf](tokenauth.md#renewtokenself)
* [revokeToken](tokenauth.md#revoketoken)
* [revokeTokenAndOprhanChildren](tokenauth.md#revoketokenandoprhanchildren)
* [revokeTokenByAccessor](tokenauth.md#revoketokenbyaccessor)
* [revokeTokenSelf](tokenauth.md#revoketokenself)
* [tidyTokens](tokenauth.md#tidytokens)

## Constructors

###  constructor

\+ **new TokenAuth**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[TokenAuth](tokenauth.md)*

*Overrides void*

*Defined in [auth-methods/TokenAuth.ts:33](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[TokenAuth](tokenauth.md)*

## Methods

###  createOrUpdateTokenRole

▸ **createOrUpdateTokenRole**(`roleName`: string, `payload`: [IUpsertTokenRolePayload](../globals.md#iupserttokenrolepayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TokenAuth.ts:427](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L427)*

Creates (or replaces) the named role. Roles enforce specific behavior when creating tokens
that allow token functionality that is otherwise not available or would require sudo/root
privileges to access. Role parameters, when set, override any provided options to the create
endpoints. The role name is also included in the token path, allowing all tokens created
against a role to be revoked using the /sys/leases/revoke-prefix endpoint.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#create-update-token-role

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`roleName` | string | - | The name of the token role.  |
`payload` | [IUpsertTokenRolePayload](../globals.md#iupserttokenrolepayload) | {} | - |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  createOrphanToken

▸ **createOrphanToken**(`payload`: [ICreateTokenPayload](../globals.md#icreatetokenpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/TokenAuth.ts:93](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L93)*

Creates a new orphan token.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#create-token

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ICreateTokenPayload](../globals.md#icreatetokenpayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

___

###  createToken

▸ **createToken**(`payload`: [ICreateTokenPayload](../globals.md#icreatetokenpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/TokenAuth.ts:70](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L70)*

Creates a new token.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#create-token

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ICreateTokenPayload](../globals.md#icreatetokenpayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

___

###  createTokenWithRole

▸ **createTokenWithRole**(`roleName`: string, `payload`: [ICreateTokenPayload](../globals.md#icreatetokenpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/TokenAuth.ts:118](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L118)*

Create a token with a role.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#create-token

**`parma`** roleName The name of the token role.

**Parameters:**

Name | Type |
------ | ------ |
`roleName` | string |
`payload` | [ICreateTokenPayload](../globals.md#icreatetokenpayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

___

###  deleteTokenRole

▸ **deleteTokenRole**(`roleName`: string): *Promise‹object›*

*Defined in [auth-methods/TokenAuth.ts:451](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L451)*

This endpoint deletes the named token role.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#delete-token-role

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleName` | string | The name of the token role.  |

**Returns:** *Promise‹object›*

___

###  listAccessors

▸ **listAccessors**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IListAccessorsResponse](../globals.md#ilistaccessorsresponse)››*

*Defined in [auth-methods/TokenAuth.ts:48](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L48)*

lists token accessors. This requires sudo capability, and access to it should be tightly
controlled as the accessors can be used to revoke very large numbers of tokens and their
associated leases at once.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#list-accessors

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IListAccessorsResponse](../globals.md#ilistaccessorsresponse)››*

___

###  listTokenRoles

▸ **listTokenRoles**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IListTokenRolesResponse](../globals.md#ilisttokenrolesresponse)››*

*Defined in [auth-methods/TokenAuth.ts:399](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L399)*

List available token roles.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#list-token-roles

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IListTokenRolesResponse](../globals.md#ilisttokenrolesresponse)››*

___

###  lookupToken

▸ **lookupToken**(`token`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenResponse](../globals.md#ilookuptokenresponse)››*

*Defined in [auth-methods/TokenAuth.ts:146](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L146)*

Returns information about the client token.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | Token to lookup.  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenResponse](../globals.md#ilookuptokenresponse)››*

___

###  lookupTokenByAccessor

▸ **lookupTokenByAccessor**(`accessor`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenAccessorResponse](../globals.md#ilookuptokenaccessorresponse)››*

*Defined in [auth-methods/TokenAuth.ts:196](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L196)*

Returns information about the client token from the accessor.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-accessor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`accessor` | string | Token accessor to lookup.  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenAccessorResponse](../globals.md#ilookuptokenaccessorresponse)››*

___

###  lookupTokenSelf

▸ **lookupTokenSelf**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenResponse](../globals.md#ilookuptokenresponse)››*

*Defined in [auth-methods/TokenAuth.ts:172](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L172)*

Returns information about the current client token.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-self-

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ILookupTokenResponse](../globals.md#ilookuptokenresponse)››*

___

###  readTokenRole

▸ **readTokenRole**(`roleName`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IReadTokenRoleResponse](../globals.md#ireadtokenroleresponse)››*

*Defined in [auth-methods/TokenAuth.ts:377](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L377)*

Fetches the named role configuration.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#read-token-role

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleName` | string | The name of the token role  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IReadTokenRoleResponse](../globals.md#ireadtokenroleresponse)››*

___

###  renewToken

▸ **renewToken**(`token`: string, `payload`: [IRenewTokenPayload](../globals.md#irenewtokenpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRenewTokenResponse](../globals.md#irenewtokenresponse)››*

*Defined in [auth-methods/TokenAuth.ts:224](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L224)*

Renews a lease associated with a token. This is used to prevent the expiration of a token,
and the automatic revocation of it. Token renewal is possible only if there is a
lease associated with it.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#renew-a-token

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`token` | string | - | Token to renew.  |
`payload` | [IRenewTokenPayload](../globals.md#irenewtokenpayload) | {} | - |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRenewTokenResponse](../globals.md#irenewtokenresponse)››*

___

###  renewTokenSelf

▸ **renewTokenSelf**(`payload`: [IRenewTokenPayload](../globals.md#irenewtokenpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRenewTokenResponse](../globals.md#irenewtokenresponse)››*

*Defined in [auth-methods/TokenAuth.ts:254](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L254)*

Renews a lease associated with the calling token. This is used to prevent the expiration of
a token, and the automatic revocation of it. Token renewal is possible only if there is a
lease associated with it.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#renew-a-token-self-

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`payload` | [IRenewTokenPayload](../globals.md#irenewtokenpayload) | {} |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[IRenewTokenResponse](../globals.md#irenewtokenresponse)››*

___

###  revokeToken

▸ **revokeToken**(`token`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TokenAuth.ts:280](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L280)*

Revokes a token and all child tokens. When the token is revoked, all dynamic secrets generated
with it are also revoked.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | Token to revoke  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  revokeTokenAndOprhanChildren

▸ **revokeTokenAndOprhanChildren**(`token`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TokenAuth.ts:353](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L353)*

Revokes a token but not its child tokens. When the token is revoked, all secrets generated
with it are also revoked. All child tokens are orphaned, but can be revoked sub-sequently
using revokeToken(). This is a root-protected endpoint.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#revoke-token-and-orphan-children

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | Token to revoke.  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  revokeTokenByAccessor

▸ **revokeTokenByAccessor**(`accessor`: string): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TokenAuth.ts:325](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L325)*

Revoke the token associated with the accessor and all the child tokens.
This is meant for purposes where there is no access to token ID but there is need to
revoke a token and its children.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-accessor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`accessor` | string | Accessor of the token.  |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  revokeTokenSelf

▸ **revokeTokenSelf**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TokenAuth.ts:302](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L302)*

Revokes the token used to call it and all child tokens. When the token is revoked, all dynamic
secrets generated with it are also revoked.

**`link`** https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-self-

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  tidyTokens

▸ **tidyTokens**(): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/TokenAuth.ts:472](https://github.com/theogravity/vault-tacular/blob/a3c7591/src/auth-methods/TokenAuth.ts#L472)*

Performs some maintenance tasks to clean up invalid entries that may remain in the token store.
Generally, running this is not needed unless upgrade notes or support personnel suggest it.
This may perform a lot of I/O to the storage method so should be used sparingly.

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*
