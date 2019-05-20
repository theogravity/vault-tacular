[Vault client for node.js](../README.md) > [ITlsCertificateAuth](../modules/itlscertificateauth.md) > [ILoginPayload](../interfaces/itlscertificateauth.iloginpayload.md)

# Interface: ILoginPayload

## Hierarchy

 [IBaseLoginPayload](ibaseloginpayload.md)

**↳ ILoginPayload**

## Index

### Properties

* [ca](itlscertificateauth.iloginpayload.md#ca)
* [cert](itlscertificateauth.iloginpayload.md#cert)
* [key](itlscertificateauth.iloginpayload.md#key)
* [name](itlscertificateauth.iloginpayload.md#name)

---

## Properties

<a id="ca"></a>

###  ca

**● ca**: *`Buffer`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L15)*

Certificate authority PEM to auth with vault

___
<a id="cert"></a>

###  cert

**● cert**: *`Buffer`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:19](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L19)*

Client certificate PEM to auth with vault

___
<a id="key"></a>

###  key

**● key**: *`Buffer`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:23](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L23)*

Private key PEM to auth with vault

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/560d138/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L11)*

Authenticate against only the named certificate role, returning its policy list if successful. If not set, defaults to trying all certificate roles and returning any one that matches.

___

