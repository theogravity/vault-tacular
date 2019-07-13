> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IAwsAuth](../modules/iawsauth.md) / [IGetTokenUsingIamLoginPayload](iawsauth.igettokenusingiamloginpayload.md) /

# Interface: IGetTokenUsingIamLoginPayload

## Hierarchy

* **IGetTokenUsingIamLoginPayload**

### Index

#### Properties

* [credentials](iawsauth.igettokenusingiamloginpayload.md#optional-credentials)
* [iamRequestHeaders](iawsauth.igettokenusingiamloginpayload.md#optional-iamrequestheaders)
* [role](iawsauth.igettokenusingiamloginpayload.md#role)
* [stsUrl](iawsauth.igettokenusingiamloginpayload.md#optional-stsurl)

## Properties

### `Optional` credentials

• **credentials**? : *[IAwsCredentials](iawsauth.iawscredentials.md)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:117](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L117)*

AWS credentials for use with signing the login request to AWS STS by the aws4 module. If not defined,
process.env.

___

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:127](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L127)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

● \[▪ **key**: *string*\]: string

___

###  role

• **role**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:112](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L112)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

___

### `Optional` stsUrl

• **stsUrl**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:121](https://github.com/theogravity/vault-tacular/blob/c36eea1/src/interfaces/auth-methods/IAwsAuth.ts#L121)*

The AWS STS Url. Default is https://sts.amazonaws.com