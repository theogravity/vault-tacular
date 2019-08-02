> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [AwsAuth](awsauth.md) /

# Class: AwsAuth

The AWS secrets engine generates AWS access credentials dynamically based on IAM policies.

## Hierarchy

  * [BaseAuth](baseauth.md)

  * **AwsAuth**

### Index

#### Constructors

* [constructor](awsauth.md#constructor)

#### Methods

* [getTokenUsingIamLogin](awsauth.md#gettokenusingiamlogin)
* [login](awsauth.md#login)
* [loginUsingEc2](awsauth.md#loginusingec2)
* [loginUsingIam](awsauth.md#loginusingiam)

## Constructors

###  constructor

\+ **new AwsAuth**(`baseUrl`: [BaseUrl](../globals.md#baseurl), `config?`: [IBaseClientConfig](../interfaces/ibaseclientconfig.md)): *[AwsAuth](awsauth.md)*

*Defined in [auth-methods/AwsAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-methods/AwsAuth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl` | [BaseUrl](../globals.md#baseurl) |
`config?` | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** *[AwsAuth](awsauth.md)*

## Methods

###  getTokenUsingIamLogin

▸ **getTokenUsingIamLogin**(`payload`: [IGetTokenUsingIamLoginPayload](../interfaces/iawsauth.igettokenusingiamloginpayload.md)): *`Promise<IVaultResponse<ISecret>>`*

*Defined in [auth-methods/AwsAuth.ts:45](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-methods/AwsAuth.ts#L45)*

Wrapper around loginUsingIam() that performs the additional steps
necessary to construct a proper IAM login request to get a token

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [IGetTokenUsingIamLoginPayload](../interfaces/iawsauth.igettokenusingiamloginpayload.md) |

**Returns:** *`Promise<IVaultResponse<ISecret>>`*

___

###  login

▸ **login**(`payload`: [ILoginPayload](../interfaces/iawsauth.iloginpayload.md)): *`Promise<IVaultResponse<ISecret>>`*

*Defined in [auth-methods/AwsAuth.ts:28](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-methods/AwsAuth.ts#L28)*

Generic AWS login

**`link`** https://www.vaultproject.io/api/auth/aws/index.html#login

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`payload` | [ILoginPayload](../interfaces/iawsauth.iloginpayload.md) |  {} |   |

**Returns:** *`Promise<IVaultResponse<ISecret>>`*

___

###  loginUsingEc2

▸ **loginUsingEc2**(`payload`: [ILoginEc2Payload](../interfaces/iawsauth.iloginec2payload.md)): *`Promise<IVaultResponse<ISecret>>`*

*Defined in [auth-methods/AwsAuth.ts:85](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-methods/AwsAuth.ts#L85)*

AWS EC2 login with EC2-required payload only

**`link`** https://www.vaultproject.io/api/auth/aws/index.html#login

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ILoginEc2Payload](../interfaces/iawsauth.iloginec2payload.md) |

**Returns:** *`Promise<IVaultResponse<ISecret>>`*

___

###  loginUsingIam

▸ **loginUsingIam**(`payload`: [ILoginIamPayload](../interfaces/iawsauth.iloginiampayload.md)): *`Promise<IVaultResponse<ISecret>>`*

*Defined in [auth-methods/AwsAuth.ts:75](https://github.com/theogravity/vault-tacular/blob/f2b3676/src/auth-methods/AwsAuth.ts#L75)*

AWS IAM login with IAM-required payload only

**`link`** https://www.vaultproject.io/api/auth/aws/index.html#login

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ILoginIamPayload](../interfaces/iawsauth.iloginiampayload.md) |

**Returns:** *`Promise<IVaultResponse<ISecret>>`*