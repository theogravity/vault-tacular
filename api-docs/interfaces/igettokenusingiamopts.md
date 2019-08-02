> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IGetTokenUsingIamOpts](igettokenusingiamopts.md) /

# Interface: IGetTokenUsingIamOpts

## Hierarchy

* **IGetTokenUsingIamOpts**

### Index

#### Properties

* [iamRequestHeaders](igettokenusingiamopts.md#optional-iamrequestheaders)
* [stsRegion](igettokenusingiamopts.md#optional-stsregion)
* [stsUrl](igettokenusingiamopts.md#optional-stsurl)

## Properties

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [auth-token-helpers/get-token-using-iam.ts:20](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-token-helpers/get-token-using-iam.ts#L20)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

● \[▪ **key**: *string*\]: string

___

### `Optional` stsRegion

• **stsRegion**? : *string*

*Defined in [auth-token-helpers/get-token-using-iam.ts:14](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-token-helpers/get-token-using-iam.ts#L14)*

AWS STS region. Used to resolve the STS url if stsUrl is not specified.

___

### `Optional` stsUrl

• **stsUrl**? : *string*

*Defined in [auth-token-helpers/get-token-using-iam.ts:10](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-token-helpers/get-token-using-iam.ts#L10)*

The AWS STS Url. Default is https://sts.amazonaws.com if stsRegion is not specified.