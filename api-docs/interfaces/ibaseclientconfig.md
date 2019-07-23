> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IBaseClientConfig](ibaseclientconfig.md) /

# Interface: IBaseClientConfig

Configuration parameters for client initialization

## Hierarchy

* **IBaseClientConfig**

### Index

#### Properties

* [authToken](ibaseclientconfig.md#optional-authtoken)
* [mount](ibaseclientconfig.md#optional-mount)
* [namespace](ibaseclientconfig.md#optional-namespace)
* [reqOpts](ibaseclientconfig.md#optional-reqopts)

## Properties

### `Optional` authToken

• **authToken**? : *[AuthTokenParam](../globals.md#authtokenparam)*

*Defined in [interfaces/IBaseClient.ts:26](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/IBaseClient.ts#L26)*

The token value, or an async function that returns the token used for the
Authorization / X-Vault-Token header. The client does *not* cache the result;
the function should implement caching and renewal of the token if necessary.

___

### `Optional` mount

• **mount**? : *string*

*Defined in [interfaces/IBaseClient.ts:10](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/IBaseClient.ts#L10)*

Auth method mount point

___

### `Optional` namespace

• **namespace**? : *string*

*Defined in [interfaces/IBaseClient.ts:15](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/IBaseClient.ts#L15)*

Namespace path (Vault Enterprise feature)

**`link`** https://www.vaultproject.io/docs/enterprise/namespaces/index.html

___

### `Optional` reqOpts

• **reqOpts**? : *`RequestPromiseOptions`*

*Defined in [interfaces/IBaseClient.ts:20](https://github.com/theogravity/vault-tacular/blob/7a596ac/src/interfaces/IBaseClient.ts#L20)*

Additional request module options

**`link`** https://www.npmjs.com/package/request