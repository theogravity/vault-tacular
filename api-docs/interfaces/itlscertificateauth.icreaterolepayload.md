> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [ITlsCertificateAuth](../modules/itlscertificateauth.md) / [ICreateRolePayload](itlscertificateauth.icreaterolepayload.md) /

# Interface: ICreateRolePayload

## Hierarchy

* **ICreateRolePayload**

### Index

#### Properties

* [allowed_common_names](itlscertificateauth.icreaterolepayload.md#optional-allowed_common_names)
* [allowed_dns_names](itlscertificateauth.icreaterolepayload.md#optional-allowed_dns_names)
* [allowed_email_sans](itlscertificateauth.icreaterolepayload.md#optional-allowed_email_sans)
* [allowed_organizational_units](itlscertificateauth.icreaterolepayload.md#optional-allowed_organizational_units)
* [allowed_uri_sans](itlscertificateauth.icreaterolepayload.md#optional-allowed_uri_sans)
* [bound_cidrs](itlscertificateauth.icreaterolepayload.md#optional-bound_cidrs)
* [certificate](itlscertificateauth.icreaterolepayload.md#certificate)
* [display_name](itlscertificateauth.icreaterolepayload.md#optional-display_name)
* [max_ttl](itlscertificateauth.icreaterolepayload.md#optional-max_ttl)
* [period](itlscertificateauth.icreaterolepayload.md#optional-period)
* [policies](itlscertificateauth.icreaterolepayload.md#optional-policies)
* [required_extensions](itlscertificateauth.icreaterolepayload.md#optional-required_extensions)
* [ttl](itlscertificateauth.icreaterolepayload.md#optional-ttl)

## Properties

### `Optional` allowed_common_names

• **allowed_common_names**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L36)*

Constrain the Common Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least
one Name matching at least one pattern. If not set, defaults to allowing all names.

___

### `Optional` allowed_dns_names

• **allowed_dns_names**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:42](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L42)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least
one DNS matching at least one pattern. If not set, defaults to allowing all dns.

___

### `Optional` allowed_email_sans

• **allowed_email_sans**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:48](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L48)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least one
Email matching at least one pattern. If not set, defaults to allowing all emails.

___

### `Optional` allowed_organizational_units

• **allowed_organizational_units**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:60](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L60)*

 Constrain the Organizational Units (OU) in the client certificate with a globbed pattern.
 Value is a comma-separated list of OU patterns. Authentication requires at least one OU
 matching at least one pattern. If not set, defaults to allowing all OUs.

___

### `Optional` allowed_uri_sans

• **allowed_uri_sans**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:54](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L54)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of URI patterns. Authentication requires at least
one URI matching at least one pattern. If not set, defaults to allowing all URIs.

___

### `Optional` bound_cidrs

• **bound_cidrs**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:100](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L100)*

If set, restricts usage of the certificates to client IPs falling within
the range of the specified CIDR(s).

___

###  certificate

• **certificate**: *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:30](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L30)*

The PEM-format CA certificate

___

### `Optional` display_name

• **display_name**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:77](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L77)*

The display_name to set on tokens issued when authenticating against this CA certificate.
If not set, defaults to the name of the role.

___

### `Optional` max_ttl

• **max_ttl**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:88](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L88)*

Duration in either number of seconds (3600) or a time duration (1h) after which the issued
token can no longer be renewed.

___

### `Optional` period

• **period**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:95](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L95)*

Duration in either number of seconds (3600) or a time duration (1h). If set, the generated
token is a periodic token; so long as it is renewed it never expires unless max_ttl is also
set, but the TTL set on the token at each renewal is fixed to the value specified here.
If this value is modified, the token will pick up the new value at its next renewal.

___

### `Optional` policies

• **policies**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:72](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L72)*

A comma-separated list of policies to set on tokens issued when authenticating against
this CA certificate.

___

### `Optional` required_extensions

• **required_extensions**? : *string | `Array<string>`*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:67](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L67)*

Require specific Custom Extension OIDs to exist and match the pattern.
Value is a comma separated string or array of oid:value. Expects the extension
value to be some type of ASN1 encoded string. All conditions must be met.
Supports globbing on value.

___

### `Optional` ttl

• **ttl**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:83](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L83)*

The TTL of the token, provided in either number of seconds (3600) or a time duration (1h).
If not provided, the token is valid for the the mount or system default TTL time,
in that order.