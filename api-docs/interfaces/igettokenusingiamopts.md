[Vault client for node.js](../README.md) › [Globals](../globals.md) › [IGetTokenUsingIamOpts](igettokenusingiamopts.md)

# Interface: IGetTokenUsingIamOpts

## Hierarchy

* **IGetTokenUsingIamOpts**

## Index

### Properties

* [credentialFunc](igettokenusingiamopts.md#optional-credentialfunc)
* [iamRequestHeaders](igettokenusingiamopts.md#optional-iamrequestheaders)
* [retryOpts](igettokenusingiamopts.md#optional-retryopts)
* [stsRegion](igettokenusingiamopts.md#optional-stsregion)

## Properties

### `Optional` credentialFunc

• **credentialFunc**? : *function*

*Defined in [auth-token-helpers/get-token-using-iam.ts:25](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-token-helpers/get-token-using-iam.ts#L25)*

Optional function for injecting credentials instead of loading credentials through the awscred library

#### Type declaration:

▸ (): *Promise‹[IAwsCredentials](../globals.md#iawscredentials)›*

___

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [auth-token-helpers/get-token-using-iam.ts:18](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-token-helpers/get-token-using-iam.ts#L18)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` retryOpts

• **retryOpts**? : *object*

*Defined in [auth-token-helpers/get-token-using-iam.ts:30](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-token-helpers/get-token-using-iam.ts#L30)*

async-retry options when token fetch fails

#### Type declaration:

* **factor**? : *number*

* **maxTimeout**? : *number*

* **minTimeout**? : *number*

* **onRetry**(): *function*

  * (`err?`: Error, `attemptNo?`: number): *void*

* **randomize**? : *boolean*

* **retries**? : *number*

___

### `Optional` stsRegion

• **stsRegion**? : *string*

*Defined in [auth-token-helpers/get-token-using-iam.ts:12](https://github.com/theogravity/vault-tacular/blob/126b0b1/src/auth-token-helpers/get-token-using-iam.ts#L12)*

AWS STS region. Used to resolve the STS url. No definition will result in the final STS url of
'https://sts.amazonaws.com/' (with the aws4 lib region defaulting as 'us-east-1')
