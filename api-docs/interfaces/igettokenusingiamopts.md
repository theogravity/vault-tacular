> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IGetTokenUsingIamOpts](igettokenusingiamopts.md) /

# Interface: IGetTokenUsingIamOpts

## Hierarchy

* **IGetTokenUsingIamOpts**

## Index

### Properties

* [iamRequestHeaders](igettokenusingiamopts.md#optional-iamrequestheaders)
* [stsRegion](igettokenusingiamopts.md#optional-stsregion)

## Properties

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [auth-token-helpers/get-token-using-iam.ts:17](https://github.com/theogravity/vault-tacular/blob/68ec17c/src/auth-token-helpers/get-token-using-iam.ts#L17)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

● \[▪ **key**: *string*\]: string

___

### `Optional` stsRegion

• **stsRegion**? : *string*

*Defined in [auth-token-helpers/get-token-using-iam.ts:11](https://github.com/theogravity/vault-tacular/blob/68ec17c/src/auth-token-helpers/get-token-using-iam.ts#L11)*

AWS STS region. Used to resolve the STS url. No definition will result in the final STS url of
'https://sts.amazonaws.com/' (with the aws4 lib region defaulting as 'us-east-1')