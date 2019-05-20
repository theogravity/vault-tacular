[Vault client for node.js](../README.md) > [AwsAuth](../classes/awsauth.md)

# Class: AwsAuth

The AWS secrets engine generates AWS access credentials dynamically based on IAM policies.

## Hierarchy

↳  [BaseAuth](baseauth.md)

**↳ AwsAuth**

## Index

### Constructors

* [constructor](awsauth.md#constructor)

### Methods

* [login](awsauth.md#login)
* [loginUsingEc2](awsauth.md#loginusingec2)
* [loginUsingIam](awsauth.md#loginusingiam)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AwsAuth**(baseUrl: *[BaseUrl](../#baseurl)*, config?: *[IBaseClientConfig](../interfaces/ibaseclientconfig.md)*): [AwsAuth](awsauth.md)

*Defined in [auth-methods/AwsAuth.ts:13](https://github.com/theogravity/vault-tacular/blob/560d138/src/auth-methods/AwsAuth.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseUrl | [BaseUrl](../#baseurl) |
| `Optional` config | [IBaseClientConfig](../interfaces/ibaseclientconfig.md) |

**Returns:** [AwsAuth](awsauth.md)

___

## Methods

<a id="login"></a>

###  login

▸ **login**(payload?: *[ILoginPayload](../interfaces/iawsauth.iloginpayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

*Defined in [auth-methods/AwsAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/560d138/src/auth-methods/AwsAuth.ts#L27)*

Generic AWS login

*__link__*: [https://www.vaultproject.io/api/auth/aws/index.html#login](https://www.vaultproject.io/api/auth/aws/index.html#login)

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` payload | [ILoginPayload](../interfaces/iawsauth.iloginpayload.md) |  {} |   |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

___
<a id="loginusingec2"></a>

###  loginUsingEc2

▸ **loginUsingEc2**(payload: *[ILoginEc2Payload](../interfaces/iawsauth.iloginec2payload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

*Defined in [auth-methods/AwsAuth.ts:54](https://github.com/theogravity/vault-tacular/blob/560d138/src/auth-methods/AwsAuth.ts#L54)*

AWS EC2 login with EC2-required payload only

*__link__*: [https://www.vaultproject.io/api/auth/aws/index.html#login](https://www.vaultproject.io/api/auth/aws/index.html#login)

**Parameters:**

| Name | Type |
| ------ | ------ |
| payload | [ILoginEc2Payload](../interfaces/iawsauth.iloginec2payload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

___
<a id="loginusingiam"></a>

###  loginUsingIam

▸ **loginUsingIam**(payload: *[ILoginIamPayload](../interfaces/iawsauth.iloginiampayload.md)*): `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

*Defined in [auth-methods/AwsAuth.ts:44](https://github.com/theogravity/vault-tacular/blob/560d138/src/auth-methods/AwsAuth.ts#L44)*

AWS IAM login with IAM-required payload only

*__link__*: [https://www.vaultproject.io/api/auth/aws/index.html#login](https://www.vaultproject.io/api/auth/aws/index.html#login)

**Parameters:**

| Name | Type |
| ------ | ------ |
| payload | [ILoginIamPayload](../interfaces/iawsauth.iloginiampayload.md) |

**Returns:** `Promise`<[IVaultResponse](../interfaces/ivaultresponse.md)<[ISecret](../interfaces/isecret.md)>>

___

