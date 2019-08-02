> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IGetTokenUsingIamOpts](igettokenusingiamopts.md) /

# Interface: IGetTokenUsingIamOpts

## Hierarchy

* **IGetTokenUsingIamOpts**

### Index

#### Properties

* [iamRequestHeaders](igettokenusingiamopts.md#optional-iamrequestheaders)
* [stsUrl](igettokenusingiamopts.md#optional-stsurl)

## Properties

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [auth-token-helpers/get-token-using-iam.ts:16](https://github.com/theogravity/vault-tacular/blob/39d6e20/src/auth-token-helpers/get-token-using-iam.ts#L16)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

● \[▪ **key**: *string*\]: string

___

### `Optional` stsUrl

• **stsUrl**? : *string*

*Defined in [auth-token-helpers/get-token-using-iam.ts:10](https://github.com/theogravity/vault-tacular/blob/39d6e20/src/auth-token-helpers/get-token-using-iam.ts#L10)*

The AWS STS Url. Default is https://sts.amazonaws.com