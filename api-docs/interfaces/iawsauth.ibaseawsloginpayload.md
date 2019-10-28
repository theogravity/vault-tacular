> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IAwsAuth](../modules/iawsauth.md) / [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md) /

# Interface: IBaseAwsLoginPayload

## Hierarchy

* [IBaseLoginPayload](ibaseloginpayload.md)

  * **IBaseAwsLoginPayload**

  * [ILoginIamPayload](iawsauth.iloginiampayload.md)

  * [ILoginEc2Payload](iawsauth.iloginec2payload.md)

## Index

### Properties

* [nonce](iawsauth.ibaseawsloginpayload.md#optional-nonce)
* [role](iawsauth.ibaseawsloginpayload.md#optional-role)

## Properties

### `Optional` nonce

• **nonce**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

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

### `Optional` role

• **role**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/07227c0/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.