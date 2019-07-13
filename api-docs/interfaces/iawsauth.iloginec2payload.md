> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IAwsAuth](../modules/iawsauth.md) / [ILoginEc2Payload](iawsauth.iloginec2payload.md) /

# Interface: ILoginEc2Payload

## Hierarchy

  * [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md)

  * **ILoginEc2Payload**

### Index

#### Properties

* [identity](iawsauth.iloginec2payload.md#identity)
* [nonce](iawsauth.iloginec2payload.md#optional-nonce)
* [pcks7](iawsauth.iloginec2payload.md#pcks7)
* [role](iawsauth.iloginec2payload.md#optional-role)
* [signature](iawsauth.iloginec2payload.md#signature)

## Properties

###  identity

• **identity**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:87](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L87)*

Required for ec2 auth
Base64 encoded EC2 instance identity document. This needs to be supplied along with the
signature parameter. If using curl for fetching the identity document, consider using the
option -w 0 while piping the output to base64 binary.

___

### `Optional` nonce

• **nonce**? : *string*

*Inherited from [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md).[nonce](iawsauth.ibaseawsloginpayload.md#optional-nonce)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

The nonce to be used for subsequent login requests. If this parameter is not specified
at all and if reauthentication is allowed, then the method will generate a random nonce,
attaches it to the instance's identity-whitelist entry and returns the nonce back as part of
auth metadata. This value should be used with further login requests, to establish client
authenticity. Clients can choose to set a custom nonce if preferred, in which case,
it is recommended that clients provide a strong nonce. If a nonce is provided
but with an empty value, it indicates intent to disable reauthentication.
Note that, when disallow_reauthentication option is enabled on either
the role or the role tag, the nonce holds no significance. This is ignored unless
using the ec2 auth method.

___

###  pcks7

• **pcks7**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:101](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L101)*

Required for ec2 auth
PKCS7 signature of the identity document with all \n characters removed. Either this needs to
be set OR both identity and signature need to be set when using the ec2 auth method.

___

### `Optional` role

• **role**? : *string*

*Inherited from [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md).[role](iawsauth.ibaseawsloginpayload.md#optional-role)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

___

###  signature

• **signature**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:94](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L94)*

Required for ec2 auth
Base64 encoded SHA256 RSA signature of the instance identity document.
This needs to be supplied along with identity parameter when using the ec2 auth method.