[Vault client for node.js](../README.md) > [IKv2SecretEngine](../modules/ikv2secretengine.md) > [IUndeleteSecretVersionsPayload](../interfaces/ikv2secretengine.iundeletesecretversionspayload.md)

# Interface: IUndeleteSecretVersionsPayload

## Hierarchy

**IUndeleteSecretVersionsPayload**

## Index

### Properties

* [versions](ikv2secretengine.iundeletesecretversionspayload.md#versions)

---

## Properties

<a id="versions"></a>

###  versions

**● versions**: *`number`[]*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:79](https://github.com/theogravity/vault-client/blob/91e39ec/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L79)*

The versions to undelete. The versions will be restored and their result will be returned on normal get requests.

___

