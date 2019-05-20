[Vault client for node.js](../README.md) > [BaseSysBackend](../classes/basesysbackend.md)

# Class: BaseSysBackend

## Hierarchy

 [BaseClient](baseclient.md)

**↳ BaseSysBackend**

↳  [HealthSysBackend](healthsysbackend.md)

↳  [RotateSysBackend](rotatesysbackend.md)

↳  [UnsealSysBackend](unsealsysbackend.md)

↳  [InitSysBackend](initsysbackend.md)

↳  [WrappingSysBackend](wrappingsysbackend.md)

## Index

### Constructors

* [constructor](basesysbackend.md#constructor)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BaseSysBackend**(baseUrl: *[BaseUrl](../#baseurl)*, authTokenFn?: *`Function`*): [BaseSysBackend](basesysbackend.md)

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |  The URL to the Vault API including the version path |
| `Optional` authTokenFn | `Function` |

**Returns:** [BaseSysBackend](basesysbackend.md)

___

