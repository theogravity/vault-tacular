> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IWrapInfo](iwrapinfo.md) /

# Interface: IWrapInfo

Response-wrapped token result

## Hierarchy

* **IWrapInfo**

### Index

#### Properties

* [creation_time](iwrapinfo.md#creation_time)
* [token](iwrapinfo.md#token)
* [ttl](iwrapinfo.md#ttl)
* [wrapped_accessor](iwrapinfo.md#wrapped_accessor)

## Properties

###  creation_time

• **creation_time**: *string*

*Defined in [interfaces/IBaseClient.ts:119](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L119)*

The time that the response-wrapping token was created

___

###  token

• **token**: *string*

*Defined in [interfaces/IBaseClient.ts:123](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L123)*

The actual token value

___

###  ttl

• **ttl**: *number*

*Defined in [interfaces/IBaseClient.ts:127](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L127)*

The TTL of the response-wrapping token itself

___

###  wrapped_accessor

• **wrapped_accessor**: *string*

*Defined in [interfaces/IBaseClient.ts:135](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/IBaseClient.ts#L135)*

If the wrapped response is an authentication response containing a Vault token,
this is the value of the wrapped token's accessor. This is useful for orchestration
systems (such as Nomad) to able to control the lifetime of secrets based on their
knowledge of the lifetime of jobs, without having to actually unwrap the response-wrapping
token or gain knowledge of the token ID inside.