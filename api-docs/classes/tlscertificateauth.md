[Vault client for node.js](../README.md) › [Globals](../globals.md) › [TlsCertificateAuth](tlscertificateauth.md)

# Class: TlsCertificateAuth

Uses TLS certificates for authentication.

## Hierarchy

  ↳ [BaseAuth](baseauth.md)

  ↳ **TlsCertificateAuth**

## Index

### Constructors

* [constructor](tlscertificateauth.md#constructor)

### Methods

* [createRole](tlscertificateauth.md#createrole)
* [login](tlscertificateauth.md#login)

## Constructors

###  constructor

\+ **new TlsCertificateAuth**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[TlsCertificateAuth](tlscertificateauth.md)*

*Overrides void*

*Defined in [auth-methods/TlsCertificateAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/TlsCertificateAuth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[TlsCertificateAuth](tlscertificateauth.md)*

## Methods

###  createRole

▸ **createRole**(`name`: string, `payload`: [ICreateRolePayload](../globals.md#icreaterolepayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

*Defined in [auth-methods/TlsCertificateAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/TlsCertificateAuth.ts#L27)*

Sets a CA cert and associated parameters in a role name.

**`link`** https://www.vaultproject.io/api/auth/cert/index.html#create-ca-certificate-role

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`payload` | [ICreateRolePayload](../globals.md#icreaterolepayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹void››*

___

###  login

▸ **login**(`payload`: [ILoginPayload](../globals.md#iloginpayload)): *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*

*Defined in [auth-methods/TlsCertificateAuth.ts:55](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-methods/TlsCertificateAuth.ts#L55)*

Log in and fetch a token. If there is a valid chain to a CA configured in the method and all
role constraints are matched, a token will be issued. If the certificate has DNS SANs in it,
each of those will be verified. If Common Name is required to be verified, then it should be
a fully qualified DNS domain name and must be duplicated as a DNS SAN
(see https://tools.ietf.org/html/rfc6125#section-2.3).

The certificate *must* have signing capability

**`link`** https://www.vaultproject.io/api/auth/cert/index.html#login-with-tls-certificate-method

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ILoginPayload](../globals.md#iloginpayload) |

**Returns:** *Promise‹[IVaultResponse](../interfaces/ivaultresponse.md)‹[ISecret](../interfaces/isecret.md)››*
