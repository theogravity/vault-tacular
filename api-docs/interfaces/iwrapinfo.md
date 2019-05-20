[Vault client for node.js](../README.md) > [IWrapInfo](../interfaces/iwrapinfo.md)

# Interface: IWrapInfo

Response-wrapped token result

## Hierarchy

**IWrapInfo**

## Index

### Properties

* [creation_time](iwrapinfo.md#creation_time)
* [token](iwrapinfo.md#token)
* [ttl](iwrapinfo.md#ttl)
* [wrapped_accessor](iwrapinfo.md#wrapped_accessor)

---

## Properties

<a id="creation_time"></a>

###  creation_time

**● creation_time**: *`string`*

*Defined in [interfaces/IBaseClient.ts:119](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L119)*

The time that the response-wrapping token was created

___
<a id="token"></a>

###  token

**● token**: *`string`*

*Defined in [interfaces/IBaseClient.ts:123](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L123)*

The actual token value

___
<a id="ttl"></a>

###  ttl

**● ttl**: *`number`*

*Defined in [interfaces/IBaseClient.ts:127](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L127)*

The TTL of the response-wrapping token itself

___
<a id="wrapped_accessor"></a>

###  wrapped_accessor

**● wrapped_accessor**: *`string`*

*Defined in [interfaces/IBaseClient.ts:135](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/IBaseClient.ts#L135)*

If the wrapped response is an authentication response containing a Vault token, this is the value of the wrapped token's accessor. This is useful for orchestration systems (such as Nomad) to able to control the lifetime of secrets based on their knowledge of the lifetime of jobs, without having to actually unwrap the response-wrapping token or gain knowledge of the token ID inside.

___

