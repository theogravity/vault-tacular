> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [BaseSysBackend](basesysbackend.md) /

# Class: BaseSysBackend

## Hierarchy

* [BaseClient](baseclient.md)

  * **BaseSysBackend**

  * [HealthSysBackend](healthsysbackend.md)

  * [RotateSysBackend](rotatesysbackend.md)

  * [UnsealSysBackend](unsealsysbackend.md)

  * [InitSysBackend](initsysbackend.md)

  * [WrappingSysBackend](wrappingsysbackend.md)

### Index

#### Constructors

* [constructor](basesysbackend.md#constructor)

## Constructors

###  constructor

\+ **new BaseSysBackend**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `authTokenFn?`: `Function`): *[BaseSysBackend](basesysbackend.md)*

*Defined in [system-backends/BaseSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/0b78a16/src/system-backends/BaseSysBackend.ts#L4)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) | The URL to the Vault API including the version path |
`authTokenFn?` | `Function` | - |

**Returns:** *[BaseSysBackend](basesysbackend.md)*