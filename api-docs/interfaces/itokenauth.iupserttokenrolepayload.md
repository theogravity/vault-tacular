> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ITokenAuth](../modules/itokenauth.md) / [IUpsertTokenRolePayload](itokenauth.iupserttokenrolepayload.md) /

# Interface: IUpsertTokenRolePayload

## Hierarchy

* **IUpsertTokenRolePayload**

### Index

#### Properties

* [allowed_policies](itokenauth.iupserttokenrolepayload.md#optional-allowed_policies)
* [bound_cidrs](itokenauth.iupserttokenrolepayload.md#optional-bound_cidrs)
* [disallowed_policies](itokenauth.iupserttokenrolepayload.md#optional-disallowed_policies)
* [explicit_max_ttl](itokenauth.iupserttokenrolepayload.md#optional-explicit_max_ttl)
* [orphan](itokenauth.iupserttokenrolepayload.md#optional-orphan)
* [path_suffix](itokenauth.iupserttokenrolepayload.md#optional-path_suffix)
* [period](itokenauth.iupserttokenrolepayload.md#optional-period)
* [renewable](itokenauth.iupserttokenrolepayload.md#optional-renewable)
* [token_type](itokenauth.iupserttokenrolepayload.md#optional-token_type)

## Properties

### `Optional` allowed_policies

• **allowed_policies**? : *`Array<string>`*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:153](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L153)*

If set, tokens can be created with any subset of the policies in this list, rather than
the normal semantics of tokens being a subset of the calling token's policies.
The parameter is a comma-delimited string of policy names. If at creation time
no_default_policy is not set and "default" is not contained in disallowed_policies,
the "default" policy will be added to the created token automatically.

___

### `Optional` bound_cidrs

• **bound_cidrs**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:201](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L201)*

If set, restricts usage of the generated token to client IPs falling within the range of the
specified CIDR(s). Unlike most other role parameters, this is not reevaluated from the
current role value at each usage; it is set on the token itself. Root tokens with no TTL
will not be bound by these CIDRs; root tokens with TTLs will be bound by these CIDRs.

___

### `Optional` disallowed_policies

• **disallowed_policies**? : *`Array<string>`*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:160](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L160)*

 If set, successful token creation via this role will require that no policies in the given
 list are requested. The parameter is a comma-delimited string of policy names. Adding
 "default" to this list will prevent "default" from being added automatically to created
 tokens.

___

### `Optional` explicit_max_ttl

• **explicit_max_ttl**? : *number*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:186](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L186)*

Provides a maximum lifetime for any tokens issued against this role, including periodic
tokens. Unlike direct token creation, where the value for an explicit max TTL is stored in
the token, for roles this check will always use the current value set in the role.
The main use of this is to provide a hard upper bound on periodic tokens, which otherwise
can live forever as long as they are renewed. This is an integer number of seconds.

___

### `Optional` orphan

• **orphan**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:165](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L165)*

If true, tokens created against this policy will be orphan tokens (they will have no parent).
As such, they will not be automatically revoked by the revocation of any other token.

___

### `Optional` path_suffix

• **path_suffix**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:194](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L194)*

If set, tokens created against this role will have the given suffix as part of their path in
addition to the role name. This can be useful in certain scenarios, such as keeping the same
role name in the future but revoking all tokens created against it before some point in time.
The suffix can be changed, allowing new callers to have the new suffix as part of their path,
and then tokens with the old suffix can be revoked via /sys/leases/revoke-prefix.

___

### `Optional` period

• **period**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:171](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L171)*

If specified, the token will be periodic; it will have no maximum TTL
(unless an "explicit-max-ttl" is also set) but every renewal will use the given period.
Requires a root/sudo token to use.

___

### `Optional` renewable

• **renewable**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:178](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L178)*

Set to false to disable the ability of the token to be renewed past its initial TTL.
Setting the value to true will allow the token to be renewable up to the system/mount
maximum TTL.

**`default`** true

___

### `Optional` token_type

• **token_type**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:209](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITokenAuth.ts#L209)*

 Specifies the type of tokens that should be returned by the role. If either service or
 batch is specified, that kind of token will always be returned. If default-service, service
 tokens will be returned unless the client requests a batch type token at token creation
 time. If default-batch, batch tokens will be returned unless the client requests a service
 type token at token creation time.