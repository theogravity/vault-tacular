[Vault client for node.js](../README.md) > [IBaseClientConfig](../interfaces/ibaseclientconfig.md)

# Interface: IBaseClientConfig

Configuration parameters for client initialization

## Hierarchy

**IBaseClientConfig**

## Index

### Properties

* [authTokenFn](ibaseclientconfig.md#authtokenfn)
* [mount](ibaseclientconfig.md#mount)
* [namespace](ibaseclientconfig.md#namespace)
* [reqOpts](ibaseclientconfig.md#reqopts)

---

## Properties

<a id="authtokenfn"></a>

### `<Optional>` authTokenFn

**● authTokenFn**: *`Function`*

*Defined in [interfaces/IBaseClient.ts:26](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/IBaseClient.ts#L26)*

An (async) function that returns the token used for the Authorization / X-Vault-Token header. The client does _not_ cache the result; the function should implement caching and renewal of the token if necessary.

___
<a id="mount"></a>

### `<Optional>` mount

**● mount**: *`string`*

*Defined in [interfaces/IBaseClient.ts:10](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/IBaseClient.ts#L10)*

Auth method mount point

___
<a id="namespace"></a>

### `<Optional>` namespace

**● namespace**: *`string`*

*Defined in [interfaces/IBaseClient.ts:15](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/IBaseClient.ts#L15)*

Namespace path (Vault Enterprise feature)

*__link__*: [https://www.vaultproject.io/docs/enterprise/namespaces/index.html](https://www.vaultproject.io/docs/enterprise/namespaces/index.html)

___
<a id="reqopts"></a>

### `<Optional>` reqOpts

**● reqOpts**: *`RequestPromiseOptions`*

*Defined in [interfaces/IBaseClient.ts:20](https://github.com/theogravity/vault-client/blob/e1877fc/src/interfaces/IBaseClient.ts#L20)*

Additional request module options

*__link__*: [https://www.npmjs.com/package/request](https://www.npmjs.com/package/request)

___

