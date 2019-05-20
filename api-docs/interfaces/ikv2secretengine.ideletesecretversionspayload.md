[Vault client for node.js](../README.md) > [IKv2SecretEngine](../modules/ikv2secretengine.md) > [IDeleteSecretVersionsPayload](../interfaces/ikv2secretengine.ideletesecretversionspayload.md)

# Interface: IDeleteSecretVersionsPayload

## Hierarchy

**IDeleteSecretVersionsPayload**

## Index

### Properties

* [versions](ikv2secretengine.ideletesecretversionspayload.md#versions)

---

## Properties

<a id="versions"></a>

###  versions

**● versions**: *`number`[]*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:71](https://github.com/theogravity/vault-tacular/blob/2099cfa/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L71)*

The versions to be deleted. The versioned result will not be deleted, but it will no longer be returned in normal get requests.

___

