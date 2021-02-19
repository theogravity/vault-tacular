[Vault client for node.js](../README.md) › [Globals](../globals.md) › [IGetTokenUsingUserPassOpts](igettokenusinguserpassopts.md)

# Interface: IGetTokenUsingUserPassOpts

## Hierarchy

* **IGetTokenUsingUserPassOpts**

## Index

### Properties

* [onError](igettokenusinguserpassopts.md#onerror)
* [password](igettokenusinguserpassopts.md#password)
* [retryOpts](igettokenusinguserpassopts.md#optional-retryopts)
* [userPassAuthClient](igettokenusinguserpassopts.md#userpassauthclient)
* [username](igettokenusinguserpassopts.md#username)

## Properties

###  onError

• **onError**: *function*

*Defined in [auth-token-helpers/get-token-from-user-pass.ts:17](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/auth-token-helpers/get-token-from-user-pass.ts#L17)*

Called when there is an error fetching or refreshing the token

#### Type declaration:

▸ (`err`: Error, `retryCount?`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`retryCount?` | number |

___

###  password

• **password**: *string*

*Defined in [auth-token-helpers/get-token-from-user-pass.ts:13](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/auth-token-helpers/get-token-from-user-pass.ts#L13)*

___

### `Optional` retryOpts

• **retryOpts**? : *object*

*Defined in [auth-token-helpers/get-token-from-user-pass.ts:21](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/auth-token-helpers/get-token-from-user-pass.ts#L21)*

async-retry options when token fetch fails

#### Type declaration:

* **factor**? : *number*

* **maxTimeout**? : *number*

* **minTimeout**? : *number*

* **randomize**? : *boolean*

* **retries**? : *number*

___

###  userPassAuthClient

• **userPassAuthClient**: *[UserPassAuth](../classes/userpassauth.md)*

*Defined in [auth-token-helpers/get-token-from-user-pass.ts:11](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/auth-token-helpers/get-token-from-user-pass.ts#L11)*

Instance of a configured UserPassAuth

___

###  username

• **username**: *string*

*Defined in [auth-token-helpers/get-token-from-user-pass.ts:12](https://github.com/theogravity/vault-tacular/blob/c9b4b35/src/auth-token-helpers/get-token-from-user-pass.ts#L12)*
