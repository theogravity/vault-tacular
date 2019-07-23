> **[Vault client for node.js](../README.md)**

[Globals](../globals.md) / [IAwsAuth](../modules/iawsauth.md) / [ILoginIamPayload](iawsauth.iloginiampayload.md) /

# Interface: ILoginIamPayload

## Hierarchy

  * [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md)

  * **ILoginIamPayload**

### Index

#### Properties

* [iam_http_request_method](iawsauth.iloginiampayload.md#iam_http_request_method)
* [iam_request_body](iawsauth.iloginiampayload.md#iam_request_body)
* [iam_request_headers](iawsauth.iloginiampayload.md#iam_request_headers)
* [iam_request_url](iawsauth.iloginiampayload.md#iam_request_url)
* [nonce](iawsauth.iloginiampayload.md#optional-nonce)
* [role](iawsauth.iloginiampayload.md#optional-role)

## Properties

###  iam_http_request_method

• **iam_http_request_method**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:46](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L46)*

Required for IAM auth
HTTP method used in the signed request. Currently only POST is supported,
but other methods may be supported in the future. This is required when
using the iam auth method.

___

###  iam_request_body

• **iam_request_body**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:64](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L64)*

Required for IAM auth
Base64-encoded body of the signed request.
Most likely QWN0aW9uPUdldENhbGxlcklkZW50aXR5JlZlcnNpb249MjAxMS0wNi0xNQ==
which is the base64 encoding of Action=GetCallerIdentity&Version=2011-06-15.
This is required when using the iam auth method.

___

###  iam_request_headers

• **iam_request_headers**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:77](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L77)*

Required for IAM auth
Key/value pairs of headers for use in the sts:GetCallerIdentity HTTP requests headers.
Can be either a Base64-encoded, JSON-serialized string, or a JSON object of key/value pairs.
The JSON serialization assumes that each header key maps to either a string value or an array
of string values (though the length of that array will probably only be one).
If the iam_server_id_header_value is configured in Vault for the aws auth mount,
then the headers must include the X-Vault-AWS-IAM-Server-ID header, its value must match
the value configured, and the header must be included in the signed headers.
This is required when using the iam auth method.

___

###  iam_request_url

• **iam_request_url**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:55](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L55)*

Required for IAM auth
Base64-encoded HTTP URL used in the signed request. Most likely just
aHR0cHM6Ly9zdHMuYW1hem9uYXdzLmNvbS8= (base64-encoding of https://sts.amazonaws.com/)
as most requests will probably use POST with an empty URI. This is required when
using the iam auth method.

___

### `Optional` nonce

• **nonce**? : *string*

*Inherited from [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md).[nonce](iawsauth.ibaseawsloginpayload.md#optional-nonce)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

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

*Inherited from [IBaseAwsLoginPayload](iawsauth.ibaseawsloginpayload.md).[role](iawsauth.ibaseawsloginpayload.md#optional-role)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/27041c7/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.