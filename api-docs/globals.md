[Vault client for node.js](README.md) › [Globals](globals.md)

# Vault client for node.js

## Index

### Namespaces

* [IAwsAuth](globals.md#iawsauth)
* [IBaseDatabaseEngine](globals.md#ibasedatabaseengine)
* [IHealthSysBackend](globals.md#ihealthsysbackend)
* [IInitSysBackend](globals.md#iinitsysbackend)
* [IKv1SecretEngine](globals.md#ikv1secretengine)
* [IKv2SecretEngine](globals.md#ikv2secretengine)
* [IPostgreSqlEngine](globals.md#ipostgresqlengine)
* [ITlsCertificateAuth](globals.md#itlscertificateauth)
* [ITokenAuth](globals.md#itokenauth)
* [IUnsealSysBackend](globals.md#iunsealsysbackend)
* [IUserPassAuth](globals.md#iuserpassauth)
* [IWrappingSysBackend](globals.md#iwrappingsysbackend)

### Classes

* [AwsAuth](classes/awsauth.md)
* [BaseAuth](classes/baseauth.md)
* [BaseClient](classes/baseclient.md)
* [BaseDatabaseEngine](classes/basedatabaseengine.md)
* [BaseSecretEngine](classes/basesecretengine.md)
* [BaseSysBackend](classes/basesysbackend.md)
* [HealthSysBackend](classes/healthsysbackend.md)
* [InitSysBackend](classes/initsysbackend.md)
* [Kv1SecretEngine](classes/kv1secretengine.md)
* [Kv2SecretEngine](classes/kv2secretengine.md)
* [PostgreSqlEngine](classes/postgresqlengine.md)
* [RotateSysBackend](classes/rotatesysbackend.md)
* [TlsCertificateAuth](classes/tlscertificateauth.md)
* [TokenAuth](classes/tokenauth.md)
* [UnsealSysBackend](classes/unsealsysbackend.md)
* [UserPassAuth](classes/userpassauth.md)
* [WrappingSysBackend](classes/wrappingsysbackend.md)

### Interfaces

* [IBaseClientConfig](interfaces/ibaseclientconfig.md)
* [IBaseLoginPayload](interfaces/ibaseloginpayload.md)
* [IClientReqParams](interfaces/iclientreqparams.md)
* [IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md)
* [ISecret](interfaces/isecret.md)
* [ISecretAuth](interfaces/isecretauth.md)
* [IVaultResponse](interfaces/ivaultresponse.md)
* [IWrapInfo](interfaces/iwrapinfo.md)

### Type aliases

* [AuthTokenHelperFunc](globals.md#authtokenhelperfunc)
* [AuthTokenParam](globals.md#authtokenparam)
* [BaseUrl](globals.md#baseurl)
* [VaultToken](globals.md#vaulttoken)
* [VaultWarnings](globals.md#vaultwarnings)

### Variables

* [CONFIGURE_CONN_PATH](globals.md#const-configure_conn_path)
* [CONFIGURE_ENGINE_PATH](globals.md#const-configure_engine_path)
* [CREATE_ORPHAN_TOKEN_PATH](globals.md#const-create_orphan_token_path)
* [CREATE_ROLE_PATH](globals.md#const-create_role_path)
* [CREATE_TOKEN_PATH](globals.md#const-create_token_path)
* [CREATE_TOKEN_WITH_ROLE_PATH](globals.md#const-create_token_with_role_path)
* [DEFAULT_MOUNT_POINT](globals.md#const-default_mount_point)
* [DEFAULT_PATH](globals.md#const-default_path)
* [DELETE_CONN_PATH](globals.md#const-delete_conn_path)
* [DELETE_ROLE_PATH](globals.md#const-delete_role_path)
* [DELETE_TOKEN_ROLE_PATH](globals.md#const-delete_token_role_path)
* [GENERATE_CREDS_PATH](globals.md#const-generate_creds_path)
* [LIST_ACCESSORS_PATH](globals.md#const-list_accessors_path)
* [LIST_CONN_PATH](globals.md#const-list_conn_path)
* [LIST_ROLES_PATH](globals.md#const-list_roles_path)
* [LIST_TOKEN_ROLES_PATH](globals.md#const-list_token_roles_path)
* [LOGIN_PATH](globals.md#const-login_path)
* [LOOKUP_ACCESSOR_PATH](globals.md#const-lookup_accessor_path)
* [LOOKUP_TOKEN_PATH](globals.md#const-lookup_token_path)
* [LOOKUP_TOKEN_SELF_PATH](globals.md#const-lookup_token_self_path)
* [PLUGIN_NAME](globals.md#const-plugin_name)
* [READ_CONN_PATH](globals.md#const-read_conn_path)
* [READ_ROLE_PATH](globals.md#const-read_role_path)
* [READ_TOKEN_ROLE_PATH](globals.md#const-read_token_role_path)
* [RENEW_TOKEN_PATH](globals.md#const-renew_token_path)
* [RENEW_TOKEN_SELF_PATH](globals.md#const-renew_token_self_path)
* [RESET_CONN_PATH](globals.md#const-reset_conn_path)
* [REVOKE_ACCESSOR_PATH](globals.md#const-revoke_accessor_path)
* [REVOKE_ORPHAN_AND_CHILDREN_PATH](globals.md#const-revoke_orphan_and_children_path)
* [REVOKE_TOKEN_PATH](globals.md#const-revoke_token_path)
* [REVOKE_TOKEN_SELF_PATH](globals.md#const-revoke_token_self_path)
* [ROTATE_ROOT_CREDS_PATH](globals.md#const-rotate_root_creds_path)
* [SECRET_CREATE_UPDATE_PATH](globals.md#const-secret_create_update_path)
* [SECRET_DELETE_LATEST_PATH](globals.md#const-secret_delete_latest_path)
* [SECRET_DELETE_METADATA_AND_ALL_VERS_PATH](globals.md#const-secret_delete_metadata_and_all_vers_path)
* [SECRET_DELETE_PATH](globals.md#const-secret_delete_path)
* [SECRET_DELETE_VERSIONS_PATH](globals.md#const-secret_delete_versions_path)
* [SECRET_DESTROY_VERSIONS_PATH](globals.md#const-secret_destroy_versions_path)
* [SECRET_LIST_PATH](globals.md#const-secret_list_path)
* [SECRET_READ_METADATA_PATH](globals.md#const-secret_read_metadata_path)
* [SECRET_READ_PATH](globals.md#const-secret_read_path)
* [SECRET_UNDELETE_VERSIONS_PATH](globals.md#const-secret_undelete_versions_path)
* [SECRET_UPDATE_METADATA_PATH](globals.md#const-secret_update_metadata_path)
* [SECRET_UPSERT_PATH](globals.md#const-secret_upsert_path)
* [SECRET_VERSION_PATH](globals.md#const-secret_version_path)
* [TIDY_TOKEN_PATH](globals.md#const-tidy_token_path)
* [UPSERT_PATH](globals.md#const-upsert_path)
* [UPSERT_ROLE_PATH](globals.md#const-upsert_role_path)
* [UPSERT_TOKEN_ROLE_PATH](globals.md#const-upsert_token_role_path)
* [WRAPPING_LOOKUP_PATH](globals.md#const-wrapping_lookup_path)
* [WRAPPING_REWRAP_PATH](globals.md#const-wrapping_rewrap_path)
* [WRAPPING_UNWRAP_PATH](globals.md#const-wrapping_unwrap_path)
* [WRAPPING_WRAP_PATH](globals.md#const-wrapping_wrap_path)
* [readFileAsync](globals.md#const-readfileasync)

### Functions

* [getTokenFromFile](globals.md#gettokenfromfile)
* [getTokenUsingIam](globals.md#gettokenusingiam)
* [loadCredentials](globals.md#loadcredentials)

## Namespaces

###  IAwsAuth

• **IAwsAuth**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L3)*

###  IAwsCredentials

• **IAwsCredentials**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:132](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L132)*

### `Optional` accessKeyId

• **accessKeyId**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:133](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L133)*

### `Optional` secretAccessKey

• **secretAccessKey**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:134](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L134)*

### `Optional` sessionToken

• **sessionToken**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:135](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L135)*

###  IBaseAwsLoginPayload

• **IBaseAwsLoginPayload**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L14)*

### `Optional` nonce

• **nonce**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

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

### `Optional` role

• **role**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

###  IGetTokenUsingIamLoginPayload

• **IGetTokenUsingIamLoginPayload**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:104](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L104)*

### `Optional` credentials

• **credentials**? : *[IAwsCredentials](globals.md#iawscredentials)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:117](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L117)*

AWS credentials for use with signing the login request to AWS STS by the aws4 module. If not defined,
process.env.

### `Optional` iamRequestHeaders

• **iamRequestHeaders**? : *object*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:127](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L127)*

Additional headers to pass / encode for the aws sts:GetCallerIdentity call
This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
vault configurations

#### Type declaration:

* \[ **key**: *string*\]: string

###  role

• **role**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:112](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L112)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

### `Optional` stsRegion

• **stsRegion**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:121](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L121)*

AWS STS region, which determines the sts url to use.

###  ILoginEc2Payload

• **ILoginEc2Payload**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:80](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L80)*

###  identity

• **identity**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:87](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L87)*

Required for ec2 auth
Base64 encoded EC2 instance identity document. This needs to be supplied along with the
signature parameter. If using curl for fetching the identity document, consider using the
option -w 0 while piping the output to base64 binary.

### `Optional` nonce

• **nonce**? : *string*

*Inherited from [IBaseAwsLoginPayload](globals.md#ibaseawsloginpayload).[nonce](globals.md#optional-nonce)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

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

###  pcks7

• **pcks7**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:101](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L101)*

Required for ec2 auth
PKCS7 signature of the identity document with all \n characters removed. Either this needs to
be set OR both identity and signature need to be set when using the ec2 auth method.

### `Optional` role

• **role**? : *string*

*Inherited from [IBaseAwsLoginPayload](globals.md#ibaseawsloginpayload).[role](globals.md#optional-role)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

###  signature

• **signature**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:94](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L94)*

Required for ec2 auth
Base64 encoded SHA256 RSA signature of the instance identity document.
This needs to be supplied along with identity parameter when using the ec2 auth method.

###  ILoginIamPayload

• **ILoginIamPayload**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L39)*

###  iam_http_request_method

• **iam_http_request_method**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:46](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L46)*

Required for IAM auth
HTTP method used in the signed request. Currently only POST is supported,
but other methods may be supported in the future. This is required when
using the iam auth method.

###  iam_request_body

• **iam_request_body**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:64](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L64)*

Required for IAM auth
Base64-encoded body of the signed request.
Most likely QWN0aW9uPUdldENhbGxlcklkZW50aXR5JlZlcnNpb249MjAxMS0wNi0xNQ==
which is the base64 encoding of Action=GetCallerIdentity&Version=2011-06-15.
This is required when using the iam auth method.

###  iam_request_headers

• **iam_request_headers**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:77](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L77)*

Required for IAM auth
Key/value pairs of headers for use in the sts:GetCallerIdentity HTTP requests headers.
Can be either a Base64-encoded, JSON-serialized string, or a JSON object of key/value pairs.
The JSON serialization assumes that each header key maps to either a string value or an array
of string values (though the length of that array will probably only be one).
If the iam_server_id_header_value is configured in Vault for the aws auth mount,
then the headers must include the X-Vault-AWS-IAM-Server-ID header, its value must match
the value configured, and the header must be included in the signed headers.
This is required when using the iam auth method.

###  iam_request_url

• **iam_request_url**: *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:55](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L55)*

Required for IAM auth
Base64-encoded HTTP URL used in the signed request. Most likely just
aHR0cHM6Ly9zdHMuYW1hem9uYXdzLmNvbS8= (base64-encoding of https://sts.amazonaws.com/)
as most requests will probably use POST with an empty URI. This is required when
using the iam auth method.

### `Optional` nonce

• **nonce**? : *string*

*Inherited from [IBaseAwsLoginPayload](globals.md#ibaseawsloginpayload).[nonce](globals.md#optional-nonce)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L36)*

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

### `Optional` role

• **role**? : *string*

*Inherited from [IBaseAwsLoginPayload](globals.md#ibaseawsloginpayload).[role](globals.md#optional-role)*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L22)*

Name of the role against which the login is being attempted. If role is not specified, then
the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
is trying to login if using the ec2 auth method, or the "friendly name"
(i.e., role name or username) of the IAM principal authenticated. If a matching role is not
found, login fails.

###  ILoginPayload

• **ILoginPayload**:

*Defined in [interfaces/auth-methods/IAwsAuth.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L4)*

### `Optional` iam_http_request_method

• **iam_http_request_method**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L5)*

### `Optional` iam_request_body

• **iam_request_body**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L7)*

### `Optional` iam_request_headers

• **iam_request_headers**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L8)*

### `Optional` iam_request_url

• **iam_request_url**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L6)*

### `Optional` identity

• **identity**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L9)*

### `Optional` pcks7

• **pcks7**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L11)*

### `Optional` signature

• **signature**? : *string*

*Defined in [interfaces/auth-methods/IAwsAuth.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IAwsAuth.ts#L10)*

___

###  IBaseDatabaseEngine

• **IBaseDatabaseEngine**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L3)*

###  IConfigConnectionPayload

• **IConfigConnectionPayload**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L8)*

plugin_name is not defined here on purpose
since it will be hard-coded into the database-specific engine on init

### `Optional` allowed_roles

• **allowed_roles**? : *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:20](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L20)*

List of the roles allowed to use this connection. Defaults to empty (no roles),
if contains a "*" any role can use this connection.

### `Optional` root_rotation_statements

• **root_rotation_statements**? : *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L26)*

Specifies the database statements to be executed to rotate the root user's credentials.
See the plugin's API page for more information on support and formatting for this parameter.

### `Optional` verify_connection

• **verify_connection**? : *boolean*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L14)*

Specifies if the connection is verified during initial configuration. Defaults to true.

**`default`** true

###  IGenerateCredsResponse

• **IGenerateCredsResponse**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:110](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L110)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:111](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L111)*

#### Type declaration:

* **password**: *string*

* **username**: *string*

###  IListConnectionsResponse

• **IListConnectionsResponse**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:42](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L42)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:43](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L43)*

#### Type declaration:

* **keys**: *Array‹string›*

###  IListRolesResponse

• **IListRolesResponse**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:100](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L100)*

###  auth

• **auth**: *[ISecretAuth](interfaces/isecretauth.md)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:101](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L101)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:102](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L102)*

#### Type declaration:

* **keys**: *Array‹string›*

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:105](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L105)*

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:106](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L106)*

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:107](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L107)*

###  IReadConnectionResponse

• **IReadConnectionResponse**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:29](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L29)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:30](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L30)*

#### Type declaration:

* **allowed_roles**: *Array‹string›*

* **connection_details**: *object*

* **plugin_name**: *string*

###  IReadRoleResponse

• **IReadRoleResponse**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:96](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L96)*

###  data

• **data**: *[IUpsertRolePayload](globals.md#iupsertrolepayload)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:97](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L97)*

###  IUpsertRolePayload

• **IUpsertRolePayload**:

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:48](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L48)*

###  creation_statements

• **creation_statements**: *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:73](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L73)*

Specifies the database statements executed to create and configure a user. See the plugin's
API page for more information on support and formatting for this parameter.

###  db_name

• **db_name**: *string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:52](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L52)*

The name of the database connection to use for this role.

### `Optional` default_ttl

• **default_ttl**? : *number | string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:59](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L59)*

 Specifies the TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds. Defaults to
 system/engine default TTL time.

### `Optional` max_ttl

• **max_ttl**? : *number | string*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:67](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L67)*

 Specifies the maximum TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds.
 Defaults to system/mount default TTL time; this value is allowed to be less than the
 mount max TTL (or, if not set, the system max TTL), but it is not allowed to be longer.

### `Optional` renew_statements

• **renew_statements**? : *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:93](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L93)*

Specifies the database statements to be executed to renew a user. Not every plugin type will
support this functionality. See the plugin's API page for more information on support and
formatting for this parameter.

### `Optional` revocation_statements

• **revocation_statements**? : *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:79](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L79)*

 Specifies the database statements to be executed to revoke a user. See the plugin's API
 page for more information on support and formatting for this parameter.

### `Optional` rollback_statements

• **rollback_statements**? : *Array‹string›*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:86](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L86)*

Specifies the database statements to be executed rollback a create operation in the event
of an error. Not every plugin type will support this functionality. See the plugin's API
page for more information on support and formatting for this parameter.

___

###  IHealthSysBackend

• **IHealthSysBackend**:

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L1)*

###  IReadHealthInfoPayload

• **IReadHealthInfoPayload**:

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:2](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L2)*

### `Optional` activecode

• **activecode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L19)*

Specifies the status code that should be returned for an active node.

### `Optional` drsecondarycode

• **drsecondarycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:27](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L27)*

Specifies the status code that should be returned for a DR secondary node.

### `Optional` performancestandbycode

• **performancestandbycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:31](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L31)*

Specifies the status code that should be returned for a performance standby node.

### `Optional` perfstandbyok

• **perfstandbyok**? : *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L15)*

Specifies if being a performance standby should still return the active status code instead
of the performance standby status code. This is useful when Vault is behind a
non-configurable load balance that just wants a 200-level response.

### `Optional` sealedcode

• **sealedcode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:35](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L35)*

Specifies the status code that should be returned for a sealed node.

### `Optional` standbycode

• **standbycode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L23)*

Specifies the status code that should be returned for a standby node.

### `Optional` standbyok

• **standbyok**? : *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L9)*

Specifies if being a standby should still return the active status code instead of the
standby status code. This is useful when Vault is behind a non-configurable load balance
that just wants a 200-level response. This will not apply if the node is a performance
standby.

### `Optional` uninitcode

• **uninitcode**? : *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L39)*

Specifies the status code that should be returned for a uninitialized node.

###  IReadHealthInfoResponse

• **IReadHealthInfoResponse**:

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:47](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L47)*

Note: replication_perf_mode and replication_dr_mode reflect the state of the active node in
the cluster; if you are querying it for a standby that has just come up, it can take a small
time for the active node to inform the standby of its status.

###  cluster_id

• **cluster_id**: *string*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:57](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L57)*

###  cluster_name

• **cluster_name**: *string*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:56](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L56)*

###  initialized

• **initialized**: *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:48](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L48)*

###  performance_standby

• **performance_standby**: *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:51](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L51)*

###  replication_dr_mode

• **replication_dr_mode**: *string*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:53](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L53)*

###  replication_perf_mode

• **replication_perf_mode**: *string*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:52](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L52)*

###  sealed

• **sealed**: *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:49](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L49)*

###  server_time_utc

• **server_time_utc**: *number*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:54](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L54)*

###  standby

• **standby**: *boolean*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:50](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L50)*

###  version

• **version**: *string*

*Defined in [interfaces/system-backend/IHealthSysBackend.ts:55](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IHealthSysBackend.ts#L55)*

___

###  IInitSysBackend

• **IInitSysBackend**:

*Defined in [interfaces/system-backend/IInitSysBackend.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L1)*

###  IReadInitStatusResponse

• **IReadInitStatusResponse**:

*Defined in [interfaces/system-backend/IInitSysBackend.ts:2](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L2)*

###  initialized

• **initialized**: *boolean*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L3)*

###  IStartInitEntPayload

• **IStartInitEntPayload**:

*Defined in [interfaces/system-backend/IInitSysBackend.ts:33](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L33)*

Enterprise-only features for vault initialization

### `Optional` recovery_pgp_keys

• **recovery_pgp_keys**? : *Array‹string›*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:56](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L56)*

Specifies an array of PGP public keys used to encrypt the output recovery keys.
Ordering is preserved. The keys must be base64-encoded from their original binary
representation. The size of this array must be the same as recovery_shares.

###  recovery_shares

• **recovery_shares**: *number*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:43](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L43)*

Specifies the number of shares to split the recovery key into.

###  recovery_threshold

• **recovery_threshold**: *number*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:49](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L49)*

Specifies the number of shares required to reconstruct the recovery key. This must
be less than or equal to recovery_shares.

###  stored_shares

• **stored_shares**: *number*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:38](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L38)*

Specifies the number of shares that should be encrypted by the HSM and stored for
auto-unsealing. Currently must be the same as secret_shares.

###  IStartInitPayload

• **IStartInitPayload**:

*Defined in [interfaces/system-backend/IInitSysBackend.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L6)*

### `Optional` pgp_keys

• **pgp_keys**? : *Array‹string›*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L12)*

Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is
preserved. The keys must be base64-encoded from their original binary representation.
The size of this array must be the same as secret_shares.

### `Optional` root_token_pgp_key

• **root_token_pgp_key**? : *string*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L17)*

Specifies a PGP public key used to encrypt the initial root token. The key must be
base64-encoded from its original binary representation.

###  secret_shares

• **secret_shares**: *number*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:21](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L21)*

Specifies the number of shares to split the master key into

###  secret_threshold

• **secret_threshold**: *number*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:27](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L27)*

Specifies the number of shares required to reconstruct the master key. This must be less
than or equal secret_shares. If using Vault HSM with auto-unsealing, this value must be the
same as secret_shares.

###  IStartInitResponse

• **IStartInitResponse**:

*Defined in [interfaces/system-backend/IInitSysBackend.ts:59](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L59)*

###  keys

• **keys**: *Array‹string›*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:63](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L63)*

Master keys (encrypted if pgp_keys was provided)

###  keys_base64

• **keys_base64**: *Array‹string›*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:67](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L67)*

Master keys in base64 format

###  root_token

• **root_token**: *string*

*Defined in [interfaces/system-backend/IInitSysBackend.ts:71](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IInitSysBackend.ts#L71)*

Initial root token

___

###  IKv1SecretEngine

• **IKv1SecretEngine**:

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L1)*

###  ICreateOrUpdateSecretPayload

• **ICreateOrUpdateSecretPayload**:

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L22)*

###  IListSecretsResponse

• **IListSecretsResponse**:

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L12)*

###  auth

• **auth**: *string*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:13](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L13)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L14)*

#### Type declaration:

* **keys**: *Array‹string›*

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L17)*

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:18](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L18)*

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L19)*

###  IReadSecretResponse

• **IReadSecretResponse**:

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:2](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L2)*

###  auth

• **auth**: *string*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L3)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L4)*

#### Type declaration:

* \[ **key**: *string*\]: any

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L7)*

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L8)*

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/secrets-engines/IKv1SecretEngine.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv1SecretEngine.ts#L9)*

___

###  IKv2SecretEngine

• **IKv2SecretEngine**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L1)*

###  ICreateUpdateSecretPayload

• **ICreateUpdateSecretPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L36)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:40](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L40)*

The contents of the result map will be stored and returned on read

#### Type declaration:

* \[ **key**: *string*\]: any

### `Optional` options

• **options**? : *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:46](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L46)*

An object that holds option settings

#### Type declaration:

* **cas**? : *number*

###  ICreateUpdateSecretResponse

• **ICreateUpdateSecretResponse**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:57](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L57)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:58](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L58)*

#### Type declaration:

* **created_time**: *string*

* **deletion_time**: *string*

* **destroyed**: *boolean*

* **version**: *number*

###  IDeleteSecretVersionsPayload

• **IDeleteSecretVersionsPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:66](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L66)*

###  versions

• **versions**: *number[]*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:71](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L71)*

The versions to be deleted. The versioned result will not be deleted, but it will no longer be
returned in normal get requests.

###  IDestroySecretVersionsPayload

• **IDestroySecretVersionsPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:82](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L82)*

###  versions

• **versions**: *number[]*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:86](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L86)*

The versions to destroy. Their result will be permanently deleted.

###  IGetConfigResponse

• **IGetConfigResponse**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L15)*

### `Optional` cas_required

• **cas_required**? : *boolean*

*Inherited from [ISetConfigPayload](globals.md#isetconfigpayload).[cas_required](globals.md#optional-cas_required)*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L12)*

If true all keys will require the cas parameter to be set on all write requests.

### `Optional` max_versions

• **max_versions**? : *number*

*Inherited from [ISetConfigPayload](globals.md#isetconfigpayload).[max_versions](globals.md#optional-max_versions)*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L8)*

The number of versions to keep per key. This value applies to all keys, but a key's metadata
setting can overwrite this value. Once a key has more than the configured allowed versions
the oldest version will be permanently deleted. Defaults to 10.

###  IListSecretsResponse

• **IListSecretsResponse**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:89](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L89)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:90](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L90)*

#### Type declaration:

* **keys**: *Array‹string›*

###  IReadSecretMetadataResponse

• **IReadSecretMetadataResponse**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:95](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L95)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:96](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L96)*

#### Type declaration:

* **created_time**: *string*

* **current_version**: *number*

* **max_versions**: *number*

* **oldest_version**: *number*

* **updated_time**: *string*

* **versions**(): *object*

###  IReadSecretVersionPayload

• **IReadSecretVersionPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L17)*

### `Optional` version

• **version**? : *number*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:21](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L21)*

Specifies the version to return. If not set the latest version is returned.

###  IReadSecretVersionResponse

• **IReadSecretVersionResponse**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L24)*

###  data

• **data**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:25](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L25)*

#### Type declaration:

* \[ **s**: *string*\]: any

###  metadata

• **metadata**: *object*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:28](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L28)*

#### Type declaration:

* **created_time**: *string*

* **deletion_time**: *string*

* **destroyed**: *boolean*

* **version**: *number*

###  ISetConfigPayload

• **ISetConfigPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:2](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L2)*

### `Optional` cas_required

• **cas_required**? : *boolean*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L12)*

If true all keys will require the cas parameter to be set on all write requests.

### `Optional` max_versions

• **max_versions**? : *number*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L8)*

The number of versions to keep per key. This value applies to all keys, but a key's metadata
setting can overwrite this value. Once a key has more than the configured allowed versions
the oldest version will be permanently deleted. Defaults to 10.

###  IUndeleteSecretVersionsPayload

• **IUndeleteSecretVersionsPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:74](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L74)*

###  versions

• **versions**: *number[]*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:79](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L79)*

The versions to undelete. The versions will be restored and their result will be returned
on normal get requests.

###  IUpdateSecretMetadataPayload

• **IUpdateSecretMetadataPayload**:

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:112](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L112)*

### `Optional` cas_required

• **cas_required**? : *boolean*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:123](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L123)*

If true the key will require the cas parameter to be set on all write requests. If false,
the backend’s configuration will be used.

### `Optional` max_versions

• **max_versions**? : *number*

*Defined in [interfaces/secrets-engines/IKv2SecretEngine.ts:118](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/IKv2SecretEngine.ts#L118)*

The number of versions to keep per key. If not set, the backend’s configured max
version is used. Once a key has more than the configured allowed versions the oldest
version will be permanently deleted.

___

###  IPostgreSqlEngine

• **IPostgreSqlEngine**:

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L3)*

###  IPostgreConfigConnPayload

• **IPostgreConfigConnPayload**:

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L4)*

### `Optional` allowed_roles

• **allowed_roles**? : *Array‹string›*

*Inherited from [IConfigConnectionPayload](globals.md#iconfigconnectionpayload).[allowed_roles](globals.md#optional-allowed_roles)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:20](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L20)*

List of the roles allowed to use this connection. Defaults to empty (no roles),
if contains a "*" any role can use this connection.

###  connection_url

• **connection_url**: *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L11)*

Specifies the PostgreSQL DSN. This field can be templated and supports passing the username
and password parameters in the following format {{field_name}}. A templated connection
URL is required when using root credential rotation.

### `Optional` max_connection_lifetime

• **max_connection_lifetime**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:30](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L30)*

Specifies the maximum amount of time a connection may be reused. If <= 0s connections
are reused forever.

**`default`** 0s

### `Optional` max_idle_connections

• **max_idle_connections**? : *number*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L24)*

Specifies the maximum number of idle connections to the database. A zero uses the value of
max_open_connections and a negative value disables idle connections. If larger
than max_open_connections it will be reduced to be equal.

### `Optional` max_open_connections

• **max_open_connections**? : *number*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L17)*

Specifies the maximum number of open connections to the database.

**`default`** 2

### `Optional` password

• **password**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L39)*

The root credential password used in the connection URL.

### `Optional` plugin_name

• **plugin_name**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:46](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L46)*

Name of the postgres plugin to use. You should generally not have
to define this.

**`default`** postgresql-database-plugin

### `Optional` root_rotation_statements

• **root_rotation_statements**? : *Array‹string›*

*Inherited from [IConfigConnectionPayload](globals.md#iconfigconnectionpayload).[root_rotation_statements](globals.md#optional-root_rotation_statements)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L26)*

Specifies the database statements to be executed to rotate the root user's credentials.
See the plugin's API page for more information on support and formatting for this parameter.

### `Optional` username

• **username**? : *string*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:35](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L35)*

The root credential username used in the connection URL.

### `Optional` verify_connection

• **verify_connection**? : *boolean*

*Inherited from [IConfigConnectionPayload](globals.md#iconfigconnectionpayload).[verify_connection](globals.md#optional-verify_connection)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L14)*

Specifies if the connection is verified during initial configuration. Defaults to true.

**`default`** true

###  IUpsertRolePayload

• **IUpsertRolePayload**:

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:49](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L49)*

###  creation_statements

• **creation_statements**: *Array‹string›*

*Overrides [IUpsertRolePayload](globals.md#iupsertrolepayload).[creation_statements](globals.md#creation_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:57](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L57)*

Specifies the database statements executed to create and configure a user.
Must be a semicolon-separated string, a base64-encoded semicolon-separated string,
a serialized JSON string array, or a base64-encoded serialized JSON string array.
The '{{name}}', '{{password}}' and '{{expiration}}' values will be substituted.

###  db_name

• **db_name**: *string*

*Inherited from [IUpsertRolePayload](globals.md#iupsertrolepayload).[db_name](globals.md#db_name)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:52](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L52)*

The name of the database connection to use for this role.

### `Optional` default_ttl

• **default_ttl**? : *number | string*

*Inherited from [IUpsertRolePayload](globals.md#iupsertrolepayload).[default_ttl](globals.md#optional-default_ttl)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:59](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L59)*

 Specifies the TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds. Defaults to
 system/engine default TTL time.

### `Optional` max_ttl

• **max_ttl**? : *number | string*

*Inherited from [IUpsertRolePayload](globals.md#iupsertrolepayload).[max_ttl](globals.md#optional-max_ttl)*

*Defined in [interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts:67](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IBaseDatabaseEngine.ts#L67)*

 Specifies the maximum TTL for the leases associated with this role.
 Accepts time suffixed strings ("1h") or an integer number of seconds.
 Defaults to system/mount default TTL time; this value is allowed to be less than the
 mount max TTL (or, if not set, the system max TTL), but it is not allowed to be longer.

### `Optional` renew_statements

• **renew_statements**? : *Array‹string›*

*Overrides [IUpsertRolePayload](globals.md#iupsertrolepayload).[renew_statements](globals.md#optional-renew_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:83](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L83)*

Specifies the database statements to be executed to renew a user. Not every plugin type will
support this functionality. Must be a semicolon-separated string, a base64-encoded
semicolon-separated string, a serialized JSON string array, or a base64-encoded serialized
JSON string array. The '{{name}}' and '{{expiration}}` values will be substituted.

### `Optional` revocation_statements

• **revocation_statements**? : *Array‹string›*

*Overrides [IUpsertRolePayload](globals.md#iupsertrolepayload).[revocation_statements](globals.md#optional-revocation_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:66](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L66)*

Specifies the database statements to be executed to revoke a user. Must be a
semicolon-separated string, a base64-encoded semicolon-separated string, a
serialized JSON string array, or a base64-encoded serialized JSON string array.
The '{{name}}' value will be substituted. If not provided defaults to a generic
drop user statement.

### `Optional` rollback_statements

• **rollback_statements**? : *Array‹string›*

*Overrides [IUpsertRolePayload](globals.md#iupsertrolepayload).[rollback_statements](globals.md#optional-rollback_statements)*

*Defined in [interfaces/secrets-engines/databases/IPostgreSqlEngine.ts:75](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/secrets-engines/databases/IPostgreSqlEngine.ts#L75)*

Specifies the database statements to be executed rollback a create operation in the event of
an error. Not every plugin type will support this functionality. Must be a
semicolon-separated string, a base64-encoded semicolon-separated string, a serialized JSON
string array, or a base64-encoded serialized JSON string array. The '{{name}}' value will be
substituted.

___

###  ITlsCertificateAuth

• **ITlsCertificateAuth**:

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L3)*

###  ICreateRolePayload

• **ICreateRolePayload**:

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L26)*

### `Optional` allowed_common_names

• **allowed_common_names**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L36)*

Constrain the Common Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least
one Name matching at least one pattern. If not set, defaults to allowing all names.

### `Optional` allowed_dns_names

• **allowed_dns_names**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:42](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L42)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least
one DNS matching at least one pattern. If not set, defaults to allowing all dns.

### `Optional` allowed_email_sans

• **allowed_email_sans**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:48](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L48)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of patterns. Authentication requires at least one
Email matching at least one pattern. If not set, defaults to allowing all emails.

### `Optional` allowed_organizational_units

• **allowed_organizational_units**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:60](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L60)*

 Constrain the Organizational Units (OU) in the client certificate with a globbed pattern.
 Value is a comma-separated list of OU patterns. Authentication requires at least one OU
 matching at least one pattern. If not set, defaults to allowing all OUs.

### `Optional` allowed_uri_sans

• **allowed_uri_sans**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:54](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L54)*

Constrain the Alternative Names in the client certificate with a globbed pattern.
Value is a comma-separated list of URI patterns. Authentication requires at least
one URI matching at least one pattern. If not set, defaults to allowing all URIs.

### `Optional` bound_cidrs

• **bound_cidrs**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:100](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L100)*

If set, restricts usage of the certificates to client IPs falling within
the range of the specified CIDR(s).

###  certificate

• **certificate**: *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:30](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L30)*

The PEM-format CA certificate

### `Optional` display_name

• **display_name**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:77](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L77)*

The display_name to set on tokens issued when authenticating against this CA certificate.
If not set, defaults to the name of the role.

### `Optional` max_ttl

• **max_ttl**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:88](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L88)*

Duration in either number of seconds (3600) or a time duration (1h) after which the issued
token can no longer be renewed.

### `Optional` period

• **period**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:95](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L95)*

Duration in either number of seconds (3600) or a time duration (1h). If set, the generated
token is a periodic token; so long as it is renewed it never expires unless max_ttl is also
set, but the TTL set on the token at each renewal is fixed to the value specified here.
If this value is modified, the token will pick up the new value at its next renewal.

### `Optional` policies

• **policies**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:72](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L72)*

A comma-separated list of policies to set on tokens issued when authenticating against
this CA certificate.

### `Optional` required_extensions

• **required_extensions**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:67](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L67)*

Require specific Custom Extension OIDs to exist and match the pattern.
Value is a comma separated string or array of oid:value. Expects the extension
value to be some type of ASN1 encoded string. All conditions must be met.
Supports globbing on value.

### `Optional` ttl

• **ttl**? : *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:83](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L83)*

The TTL of the token, provided in either number of seconds (3600) or a time duration (1h).
If not provided, the token is valid for the the mount or system default TTL time,
in that order.

###  ILoginPayload

• **ILoginPayload**:

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L4)*

###  ca

• **ca**: *Buffer*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L15)*

Certificate authority PEM to auth with vault

###  cert

• **cert**: *Buffer*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L19)*

Client certificate PEM to auth with vault

###  key

• **key**: *Buffer*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L23)*

Private key PEM to auth with vault

###  name

• **name**: *string*

*Defined in [interfaces/auth-methods/ITlsCertificateAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITlsCertificateAuth.ts#L11)*

Authenticate against only the named certificate role,
returning its policy list if successful.
If not set, defaults to trying all certificate
roles and returning any one that matches.

___

###  ITokenAuth

• **ITokenAuth**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:3](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L3)*

###  ICreateTokenPayload

• **ICreateTokenPayload**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L10)*

### `Optional` display_name

• **display_name**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:70](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L70)*

The display name of the token.

**`default`** "token"

### `Optional` explicit_max_ttl

• **explicit_max_ttl**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:64](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L64)*

If set, the token will have an explicit max TTL set upon it. This maximum token TTL
cannot be changed later, and unlike with normal tokens, updates to the system/mount
max TTL value will have no effect at renewal time -- the token will never be able to
be renewed or used past the value set at issue time.

### `Optional` id

• **id**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L15)*

The ID of the client token. Can only be specified by a root token. Otherwise,
the token ID is a randomly generated value.

### `Optional` meta

• **meta**? : *object*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L27)*

A map of string to string valued metadata. This is passed through to the audit devices.

#### Type declaration:

* \[ **key**: *string*\]: string

### `Optional` no_default_policy

• **no_default_policy**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:40](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L40)*

If true the default policy will not be contained in this token's policy set.

### `Optional` no_parent

• **no_parent**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:35](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L35)*

If true and set by a root caller, the token will not have the parent token of the caller.
This creates a token with no parent.

### `Optional` num_uses

• **num_uses**? : *number*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:77](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L77)*

The maximum uses for the given token.
This can be used to create a one-time-token or limited use token.
The value of 0 has no limit to the number of uses.

### `Optional` period

• **period**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:84](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L84)*

If specified, the token will be periodic; it will have no maximum TTL
(unless an "explicit-max-ttl" is also set) but every renewal will use the given period.
Requires a root/sudo token to use.

### `Optional` policies

• **policies**? : *Array‹string›*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L22)*

A list of policies for the token. This must be a subset of the policies belonging to the
token making the request, unless root. If not specified, defaults to all the policies
of the calling token.

### `Optional` renewable

• **renewable**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:49](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L49)*

Set to false to disable the ability of the token to be renewed past its initial TTL.
Setting the value to true will allow the token to be renewable up to the system/mount
maximum TTL.

**`default`** true

### `Optional` ttl

• **ttl**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:56](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L56)*

The TTL period of the token, provided as "1h", where hour is the largest suffix.
If not provided, the token is valid for the default lease TTL,
or indefinitely if the root policy is used.

###  IListAccessorsResponse

• **IListAccessorsResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L4)*

### `Optional` auth

• **auth**? : *[ISecretAuth](interfaces/isecretauth.md)*

*Inherited from [ISecret](interfaces/isecret.md).[auth](interfaces/isecret.md#optional-auth)*

*Defined in [interfaces/IBaseClient.ts:115](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L115)*

###  data

• **data**: *object*

*Overrides [ISecret](interfaces/isecret.md).[data](interfaces/isecret.md#optional-data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L5)*

#### Type declaration:

* **keys**: *Array‹string›*

###  lease_duration

• **lease_duration**: *number*

*Inherited from [ISecret](interfaces/isecret.md).[lease_duration](interfaces/isecret.md#lease_duration)*

*Defined in [interfaces/IBaseClient.ts:101](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L101)*

Along with the lease ID, a lease duration can be read.
The lease duration is a Time To Live value: the time in seconds for
which the lease is valid. A consumer of this secret must renew the lease within that time.

###  lease_id

• **lease_id**: *string*

*Inherited from [ISecret](interfaces/isecret.md).[lease_id](interfaces/isecret.md#lease_id)*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L95)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease_id.
This is the ID used with commands such as vault renew and vault revoke to manage the
lease of the secret.

###  renewable

• **renewable**: *boolean*

*Inherited from [ISecret](interfaces/isecret.md).[renewable](interfaces/isecret.md#renewable)*

*Defined in [interfaces/IBaseClient.ts:114](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L114)*

If the lease is renewable

###  request_id

• **request_id**: *string*

*Inherited from [ISecret](interfaces/isecret.md).[request_id](interfaces/isecret.md#request_id)*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L89)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Inherited from [ISecret](interfaces/isecret.md).[warnings](interfaces/isecret.md#warnings)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L109)*

List of warnings

### `Optional` wrap_info

• **wrap_info**? : *[IWrapInfo](interfaces/iwrapinfo.md)*

*Inherited from [ISecret](interfaces/isecret.md).[wrap_info](interfaces/isecret.md#optional-wrap_info)*

*Defined in [interfaces/IBaseClient.ts:110](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L110)*

###  IListTokenRolesResponse

• **IListTokenRolesResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:139](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L139)*

###  data

• **data**: *object*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:140](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L140)*

#### Type declaration:

* **keys**: *Array‹string›*

###  ILookupTokenAccessorResponse

• **ILookupTokenAccessorResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:111](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L111)*

###  data

• **data**: *ILookupTokenRes*

*Inherited from [ILookupTokenResponse](globals.md#ilookuptokenresponse).[data](globals.md#data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:108](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L108)*

###  ILookupTokenResponse

• **ILookupTokenResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:107](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L107)*

###  data

• **data**: *ILookupTokenRes*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:108](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L108)*

###  IReadTokenRoleResponse

• **IReadTokenRoleResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:124](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L124)*

###  auth

• **auth**: *never*

*Overrides [ISecret](interfaces/isecret.md).[auth](interfaces/isecret.md#optional-auth)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:126](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L126)*

###  data

• **data**: *object*

*Overrides [ISecret](interfaces/isecret.md).[data](interfaces/isecret.md#optional-data)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:127](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L127)*

#### Type declaration:

* **allowed_policies**: *Array‹string›*

* **disallowed_policies**: *Array‹string›*

* **explicit_max_ttl**: *number*

* **name**: *string*

* **orphan**: *boolean*

* **path_suffix**: *boolean*

* **period**: *number*

* **renewable**: *boolean*

###  lease_duration

• **lease_duration**: *number*

*Inherited from [ISecret](interfaces/isecret.md).[lease_duration](interfaces/isecret.md#lease_duration)*

*Defined in [interfaces/IBaseClient.ts:101](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L101)*

Along with the lease ID, a lease duration can be read.
The lease duration is a Time To Live value: the time in seconds for
which the lease is valid. A consumer of this secret must renew the lease within that time.

###  lease_id

• **lease_id**: *string*

*Inherited from [ISecret](interfaces/isecret.md).[lease_id](interfaces/isecret.md#lease_id)*

*Defined in [interfaces/IBaseClient.ts:95](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L95)*

When reading a dynamic secret, such as via vault read, Vault always returns a lease_id.
This is the ID used with commands such as vault renew and vault revoke to manage the
lease of the secret.

###  renewable

• **renewable**: *boolean*

*Inherited from [ISecret](interfaces/isecret.md).[renewable](interfaces/isecret.md#renewable)*

*Defined in [interfaces/IBaseClient.ts:114](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L114)*

If the lease is renewable

###  request_id

• **request_id**: *string*

*Inherited from [ISecret](interfaces/isecret.md).[request_id](interfaces/isecret.md#request_id)*

*Defined in [interfaces/IBaseClient.ts:89](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L89)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Inherited from [ISecret](interfaces/isecret.md).[warnings](interfaces/isecret.md#warnings)*

*Defined in [interfaces/IBaseClient.ts:109](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L109)*

List of warnings

###  wrap_info

• **wrap_info**: *never*

*Overrides [ISecret](interfaces/isecret.md).[wrap_info](interfaces/isecret.md#optional-wrap_info)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:125](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L125)*

###  IRenewTokenPayload

• **IRenewTokenPayload**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:113](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L113)*

### `Optional` increment

• **increment**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:117](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L117)*

An optional requested lease increment can be provided. This increment may be ignored.

###  IRenewTokenResponse

• **IRenewTokenResponse**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:120](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L120)*

###  auth

• **auth**: *[ISecretAuth](interfaces/isecretauth.md)*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:121](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L121)*

###  IUpsertTokenRolePayload

• **IUpsertTokenRolePayload**:

*Defined in [interfaces/auth-methods/ITokenAuth.ts:145](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L145)*

### `Optional` allowed_policies

• **allowed_policies**? : *Array‹string›*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:153](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L153)*

If set, tokens can be created with any subset of the policies in this list, rather than
the normal semantics of tokens being a subset of the calling token's policies.
The parameter is a comma-delimited string of policy names. If at creation time
no_default_policy is not set and "default" is not contained in disallowed_policies,
the "default" policy will be added to the created token automatically.

### `Optional` bound_cidrs

• **bound_cidrs**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:201](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L201)*

If set, restricts usage of the generated token to client IPs falling within the range of the
specified CIDR(s). Unlike most other role parameters, this is not reevaluated from the
current role value at each usage; it is set on the token itself. Root tokens with no TTL
will not be bound by these CIDRs; root tokens with TTLs will be bound by these CIDRs.

### `Optional` disallowed_policies

• **disallowed_policies**? : *Array‹string›*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:160](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L160)*

 If set, successful token creation via this role will require that no policies in the given
 list are requested. The parameter is a comma-delimited string of policy names. Adding
 "default" to this list will prevent "default" from being added automatically to created
 tokens.

### `Optional` explicit_max_ttl

• **explicit_max_ttl**? : *number*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:186](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L186)*

Provides a maximum lifetime for any tokens issued against this role, including periodic
tokens. Unlike direct token creation, where the value for an explicit max TTL is stored in
the token, for roles this check will always use the current value set in the role.
The main use of this is to provide a hard upper bound on periodic tokens, which otherwise
can live forever as long as they are renewed. This is an integer number of seconds.

### `Optional` orphan

• **orphan**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:165](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L165)*

If true, tokens created against this policy will be orphan tokens (they will have no parent).
As such, they will not be automatically revoked by the revocation of any other token.

### `Optional` path_suffix

• **path_suffix**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:194](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L194)*

If set, tokens created against this role will have the given suffix as part of their path in
addition to the role name. This can be useful in certain scenarios, such as keeping the same
role name in the future but revoking all tokens created against it before some point in time.
The suffix can be changed, allowing new callers to have the new suffix as part of their path,
and then tokens with the old suffix can be revoked via /sys/leases/revoke-prefix.

### `Optional` period

• **period**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:171](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L171)*

If specified, the token will be periodic; it will have no maximum TTL
(unless an "explicit-max-ttl" is also set) but every renewal will use the given period.
Requires a root/sudo token to use.

### `Optional` renewable

• **renewable**? : *boolean*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:178](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L178)*

Set to false to disable the ability of the token to be renewed past its initial TTL.
Setting the value to true will allow the token to be renewable up to the system/mount
maximum TTL.

**`default`** true

### `Optional` token_type

• **token_type**? : *string*

*Defined in [interfaces/auth-methods/ITokenAuth.ts:209](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/ITokenAuth.ts#L209)*

 Specifies the type of tokens that should be returned by the role. If either service or
 batch is specified, that kind of token will always be returned. If default-service, service
 tokens will be returned unless the client requests a batch type token at token creation
 time. If default-batch, batch tokens will be returned unless the client requests a service
 type token at token creation time.

___

###  IUnsealSysBackend

• **IUnsealSysBackend**:

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L1)*

###  ISubmitUnsealKeyPayload

• **ISubmitUnsealKeyPayload**:

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L6)*

Either the key or reset parameter must be provided;
if both are provided, reset takes precedence.

### `Optional` key

• **key**? : *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L10)*

Specifies a single master key share. This is required unless reset is true.

### `Optional` migrate

• **migrate**? : *boolean*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L19)*

Available in 1.0 - Used to migrate the seal from shamir to autoseal or autoseal to shamir.
Must be provided on all unseal key calls.

### `Optional` reset

• **reset**? : *boolean*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L14)*

Specifies if previously-provided unseal keys are discarded and the unseal process is reset.

###  ISubmitUnsealKeyResponse

• **ISubmitUnsealKeyResponse**:

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L22)*

### `Optional` cluster_id

• **cluster_id**? : *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:40](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L40)*

### `Optional` cluster_name

• **cluster_name**? : *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L39)*

###  n

• **n**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:31](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L31)*

Number of shares

###  progress

• **progress**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:35](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L35)*

Number of successful shares used to unseal

###  sealed

• **sealed**: *boolean*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L23)*

###  t

• **t**: *number*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:27](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L27)*

Threshold

###  version

• **version**: *string*

*Defined in [interfaces/system-backend/IUnsealSysBackend.ts:36](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IUnsealSysBackend.ts#L36)*

___

###  IUserPassAuth

• **IUserPassAuth**:

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:1](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L1)*

###  IUpsertPayload

• **IUpsertPayload**:

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:2](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L2)*

### `Optional` bound_cidrs

• **bound_cidrs**? : *string | Array‹string›*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L24)*

If set, restricts usage of the login and token to client
IPs falling within the range of the specified CIDR(s).

### `Optional` max_ttl

• **max_ttl**? : *string*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L19)*

Maximum duration after which login should expire

###  password

• **password**: *string*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L6)*

The password for the user. Only required when creating the user

### `Optional` policies

• **policies**? : *string*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L11)*

Comma-separated list of policies. If set to empty string,
only the default policy will be applicable to the user.

### `Optional` ttl

• **ttl**? : *string*

*Defined in [interfaces/auth-methods/IUserPassAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/auth-methods/IUserPassAuth.ts#L15)*

The lease duration which decides login expiration

___

###  IWrappingSysBackend

• **IWrappingSysBackend**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L4)*

###  ILookupResponse

• **ILookupResponse**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L5)*

###  auth

• **auth**: *[ISecretAuth](interfaces/isecretauth.md)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L17)*

###  data

• **data**: *object*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L10)*

#### Type declaration:

* **creation_path**: *string*

* **creation_time**: *string*

* **creation_ttl**: *number*

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L8)*

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L7)*

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L9)*

###  request_id

• **request_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L6)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:16](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L16)*

###  wrap_info

• **wrap_info**: *[IWrapInfo](interfaces/iwrapinfo.md)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L15)*

###  IRewrapResponse

• **IRewrapResponse**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:20](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L20)*

###  auth

• **auth**: *[ISecretAuth](interfaces/isecretauth.md)*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[auth](globals.md#auth)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L17)*

###  data

• **data**: *object*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[data](globals.md#data)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L10)*

#### Type declaration:

* **creation_path**: *string*

* **creation_time**: *string*

* **creation_ttl**: *number*

###  lease_duration

• **lease_duration**: *number*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[lease_duration](globals.md#lease_duration)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L8)*

###  lease_id

• **lease_id**: *string*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[lease_id](globals.md#lease_id)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L7)*

###  renewable

• **renewable**: *boolean*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[renewable](globals.md#renewable)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L9)*

###  request_id

• **request_id**: *string*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[request_id](globals.md#request_id)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L6)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[warnings](globals.md#warnings)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:16](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L16)*

###  wrap_info

• **wrap_info**: *[IWrapInfo](interfaces/iwrapinfo.md)*

*Inherited from [ILookupResponse](globals.md#ilookupresponse).[wrap_info](globals.md#wrap_info)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L15)*

###  IUnwrapResponse

• **IUnwrapResponse**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L22)*

###  data

• **data**: *object*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:30](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L30)*

The set of parameters in the wrapped response from wrap().

#### Type declaration:

* \[ **key**: *string*\]: any

###  lease_duration

• **lease_duration**: *number*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:25](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L25)*

###  lease_id

• **lease_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L24)*

###  renewable

• **renewable**: *boolean*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L26)*

###  request_id

• **request_id**: *string*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L23)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:33](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L33)*

###  IWrapPayload

• **IWrapPayload**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L39)*

The exact set of given parameters will be contained in the wrapped response.

###  IWrapResponse

• **IWrapResponse**:

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:43](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L43)*

###  data

• **data**: *object*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[data](globals.md#data)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:30](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L30)*

The set of parameters in the wrapped response from wrap().

#### Type declaration:

* \[ **key**: *string*\]: any

###  lease_duration

• **lease_duration**: *number*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[lease_duration](globals.md#lease_duration)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:25](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L25)*

###  lease_id

• **lease_id**: *string*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[lease_id](globals.md#lease_id)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L24)*

###  renewable

• **renewable**: *boolean*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[renewable](globals.md#renewable)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L26)*

###  request_id

• **request_id**: *string*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[request_id](globals.md#request_id)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L23)*

###  warnings

• **warnings**: *[VaultWarnings](globals.md#vaultwarnings)*

*Inherited from [IUnwrapResponse](globals.md#iunwrapresponse).[warnings](globals.md#warnings)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:33](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L33)*

###  wrap_info

• **wrap_info**: *[IWrapInfo](interfaces/iwrapinfo.md)*

*Defined in [interfaces/system-backend/IWrappingSysBackend.ts:44](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/system-backend/IWrappingSysBackend.ts#L44)*

## Type aliases

###  AuthTokenHelperFunc

Ƭ **AuthTokenHelperFunc**: *function*

*Defined in [interfaces/IBaseClient.ts:39](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L39)*

An auth token helper function returns a function that returns a string, representing the vault token

#### Type declaration:

▸ (): *Promise‹[VaultToken](globals.md#vaulttoken)›*

___

###  AuthTokenParam

Ƭ **AuthTokenParam**: *[VaultToken](globals.md#vaulttoken) | [AuthTokenHelperFunc](globals.md#authtokenhelperfunc)*

*Defined in [interfaces/IBaseClient.ts:40](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L40)*

___

###  BaseUrl

Ƭ **BaseUrl**: *string*

*Defined in [interfaces/IBaseClient.ts:45](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L45)*

Vault API base url

___

###  VaultToken

Ƭ **VaultToken**: *string*

*Defined in [interfaces/IBaseClient.ts:32](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L32)*

Authentication token to access the API

___

###  VaultWarnings

Ƭ **VaultWarnings**: *Array‹string›*

*Defined in [interfaces/IBaseClient.ts:34](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/interfaces/IBaseClient.ts#L34)*

## Variables

### `Const` CONFIGURE_CONN_PATH

• **CONFIGURE_CONN_PATH**: *"/config/:name"* = "/config/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L10)*

___

### `Const` CONFIGURE_ENGINE_PATH

• **CONFIGURE_ENGINE_PATH**: *"/config"* = "/config"

*Defined in [secrets-engines/Kv2SecretEngine.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L7)*

___

### `Const` CREATE_ORPHAN_TOKEN_PATH

• **CREATE_ORPHAN_TOKEN_PATH**: *"/create-orphan"* = "/create-orphan"

*Defined in [auth-methods/TokenAuth.ts:13](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L13)*

___

### `Const` CREATE_ROLE_PATH

• **CREATE_ROLE_PATH**: *"/certs/:name"* = "/certs/:name"

*Defined in [auth-methods/TlsCertificateAuth.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TlsCertificateAuth.ts#L8)*

___

### `Const` CREATE_TOKEN_PATH

• **CREATE_TOKEN_PATH**: *"/create"* = "/create"

*Defined in [auth-methods/TokenAuth.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L12)*

___

### `Const` CREATE_TOKEN_WITH_ROLE_PATH

• **CREATE_TOKEN_WITH_ROLE_PATH**: *"/create/:role_name"* = "/create/:role_name"

*Defined in [auth-methods/TokenAuth.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L14)*

___

### `Const` DEFAULT_MOUNT_POINT

• **DEFAULT_MOUNT_POINT**: *"/database"* = "/database"

*Defined in [auth-methods/AwsAuth.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/AwsAuth.ts#L8)*

*Defined in [auth-methods/TlsCertificateAuth.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TlsCertificateAuth.ts#L7)*

*Defined in [auth-methods/TokenAuth.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L10)*

*Defined in [auth-methods/UserPassAuth.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/UserPassAuth.ts#L7)*

*Defined in [secrets-engines/Kv1SecretEngine.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv1SecretEngine.ts#L6)*

*Defined in [secrets-engines/Kv2SecretEngine.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L6)*

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L9)*

___

### `Const` DEFAULT_PATH

• **DEFAULT_PATH**: *"/sys/init"* = "/sys/init"

*Defined in [system-backends/HealthSysBackend.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/HealthSysBackend.ts#L5)*

*Defined in [system-backends/RotateSysBackend.ts:4](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/RotateSysBackend.ts#L4)*

*Defined in [system-backends/UnsealSysBackend.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/UnsealSysBackend.ts#L5)*

*Defined in [system-backends/InitSysBackend.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/InitSysBackend.ts#L5)*

___

### `Const` DELETE_CONN_PATH

• **DELETE_CONN_PATH**: *"/config/:name"* = "/config/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:13](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L13)*

___

### `Const` DELETE_ROLE_PATH

• **DELETE_ROLE_PATH**: *"/roles/:name"* = "/roles/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L19)*

___

### `Const` DELETE_TOKEN_ROLE_PATH

• **DELETE_TOKEN_ROLE_PATH**: *"/roles/:role_name"* = "/roles/:role_name"

*Defined in [auth-methods/TokenAuth.ts:27](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L27)*

___

### `Const` GENERATE_CREDS_PATH

• **GENERATE_CREDS_PATH**: *"/creds/:name"* = "/creds/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:20](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L20)*

___

### `Const` LIST_ACCESSORS_PATH

• **LIST_ACCESSORS_PATH**: *"/accessors"* = "/accessors"

*Defined in [auth-methods/TokenAuth.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L11)*

___

### `Const` LIST_CONN_PATH

• **LIST_CONN_PATH**: *"/config"* = "/config"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L12)*

___

### `Const` LIST_ROLES_PATH

• **LIST_ROLES_PATH**: *"/roles"* = "/roles"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:18](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L18)*

___

### `Const` LIST_TOKEN_ROLES_PATH

• **LIST_TOKEN_ROLES_PATH**: *"/roles"* = "/roles"

*Defined in [auth-methods/TokenAuth.ts:25](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L25)*

___

### `Const` LOGIN_PATH

• **LOGIN_PATH**: *"/login/:username"* = "/login/:username"

*Defined in [auth-methods/AwsAuth.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/AwsAuth.ts#L9)*

*Defined in [auth-methods/TlsCertificateAuth.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TlsCertificateAuth.ts#L9)*

*Defined in [auth-methods/UserPassAuth.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/UserPassAuth.ts#L8)*

___

### `Const` LOOKUP_ACCESSOR_PATH

• **LOOKUP_ACCESSOR_PATH**: *"/lookup-accessor"* = "/lookup-accessor"

*Defined in [auth-methods/TokenAuth.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L17)*

___

### `Const` LOOKUP_TOKEN_PATH

• **LOOKUP_TOKEN_PATH**: *"/lookup"* = "/lookup"

*Defined in [auth-methods/TokenAuth.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L15)*

___

### `Const` LOOKUP_TOKEN_SELF_PATH

• **LOOKUP_TOKEN_SELF_PATH**: *"/lookup-self"* = "/lookup-self"

*Defined in [auth-methods/TokenAuth.ts:16](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L16)*

___

### `Const` PLUGIN_NAME

• **PLUGIN_NAME**: *"postgresql-database-plugin"* = "postgresql-database-plugin"

*Defined in [secrets-engines/databases/PostgreSqlEngine.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/PostgreSqlEngine.ts#L9)*

___

### `Const` READ_CONN_PATH

• **READ_CONN_PATH**: *"/config/:name"* = "/config/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L11)*

___

### `Const` READ_ROLE_PATH

• **READ_ROLE_PATH**: *"/roles/:name"* = "/roles/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L17)*

___

### `Const` READ_TOKEN_ROLE_PATH

• **READ_TOKEN_ROLE_PATH**: *"/roles/:role_name"* = "/roles/:role_name"

*Defined in [auth-methods/TokenAuth.ts:24](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L24)*

___

### `Const` RENEW_TOKEN_PATH

• **RENEW_TOKEN_PATH**: *"/renew"* = "/renew"

*Defined in [auth-methods/TokenAuth.ts:18](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L18)*

___

### `Const` RENEW_TOKEN_SELF_PATH

• **RENEW_TOKEN_SELF_PATH**: *"/renew-self"* = "/renew-self"

*Defined in [auth-methods/TokenAuth.ts:19](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L19)*

___

### `Const` RESET_CONN_PATH

• **RESET_CONN_PATH**: *"/reset/:name"* = "/reset/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L14)*

___

### `Const` REVOKE_ACCESSOR_PATH

• **REVOKE_ACCESSOR_PATH**: *"/revoke-accessor"* = "/revoke-accessor"

*Defined in [auth-methods/TokenAuth.ts:22](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L22)*

___

### `Const` REVOKE_ORPHAN_AND_CHILDREN_PATH

• **REVOKE_ORPHAN_AND_CHILDREN_PATH**: *"/revoke-orphan"* = "/revoke-orphan"

*Defined in [auth-methods/TokenAuth.ts:23](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L23)*

___

### `Const` REVOKE_TOKEN_PATH

• **REVOKE_TOKEN_PATH**: *"/revoke"* = "/revoke"

*Defined in [auth-methods/TokenAuth.ts:20](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L20)*

___

### `Const` REVOKE_TOKEN_SELF_PATH

• **REVOKE_TOKEN_SELF_PATH**: *"/revoke-self"* = "/revoke-self"

*Defined in [auth-methods/TokenAuth.ts:21](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L21)*

___

### `Const` ROTATE_ROOT_CREDS_PATH

• **ROTATE_ROOT_CREDS_PATH**: *"/rotate-root/:name"* = "/rotate-root/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L15)*

___

### `Const` SECRET_CREATE_UPDATE_PATH

• **SECRET_CREATE_UPDATE_PATH**: *"/data/:path"* = "/data/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L9)*

___

### `Const` SECRET_DELETE_LATEST_PATH

• **SECRET_DELETE_LATEST_PATH**: *"/data/:path"* = "/data/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L10)*

___

### `Const` SECRET_DELETE_METADATA_AND_ALL_VERS_PATH

• **SECRET_DELETE_METADATA_AND_ALL_VERS_PATH**: *"/metadata/:path"* = "/metadata/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:17](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L17)*

___

### `Const` SECRET_DELETE_PATH

• **SECRET_DELETE_PATH**: *"/:path"* = "/:path"

*Defined in [secrets-engines/Kv1SecretEngine.ts:10](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv1SecretEngine.ts#L10)*

___

### `Const` SECRET_DELETE_VERSIONS_PATH

• **SECRET_DELETE_VERSIONS_PATH**: *"/delete/:path"* = "/delete/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:11](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L11)*

___

### `Const` SECRET_DESTROY_VERSIONS_PATH

• **SECRET_DESTROY_VERSIONS_PATH**: *"/destroy/:path"* = "/destroy/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:13](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L13)*

___

### `Const` SECRET_LIST_PATH

• **SECRET_LIST_PATH**: *"/metadata/:path"* = "/metadata/:path"

*Defined in [secrets-engines/Kv1SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv1SecretEngine.ts#L8)*

*Defined in [secrets-engines/Kv2SecretEngine.ts:14](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L14)*

___

### `Const` SECRET_READ_METADATA_PATH

• **SECRET_READ_METADATA_PATH**: *"/metadata/:path"* = "/metadata/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L15)*

___

### `Const` SECRET_READ_PATH

• **SECRET_READ_PATH**: *"/:path"* = "/:path"

*Defined in [secrets-engines/Kv1SecretEngine.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv1SecretEngine.ts#L7)*

___

### `Const` SECRET_UNDELETE_VERSIONS_PATH

• **SECRET_UNDELETE_VERSIONS_PATH**: *"/undelete/:path"* = "/undelete/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:12](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L12)*

___

### `Const` SECRET_UPDATE_METADATA_PATH

• **SECRET_UPDATE_METADATA_PATH**: *"/metadata/:path"* = "/metadata/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:16](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L16)*

___

### `Const` SECRET_UPSERT_PATH

• **SECRET_UPSERT_PATH**: *"/:path"* = "/:path"

*Defined in [secrets-engines/Kv1SecretEngine.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv1SecretEngine.ts#L9)*

___

### `Const` SECRET_VERSION_PATH

• **SECRET_VERSION_PATH**: *"/data/:path"* = "/data/:path"

*Defined in [secrets-engines/Kv2SecretEngine.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/Kv2SecretEngine.ts#L8)*

___

### `Const` TIDY_TOKEN_PATH

• **TIDY_TOKEN_PATH**: *"/token/tidy"* = "/token/tidy"

*Defined in [auth-methods/TokenAuth.ts:28](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L28)*

___

### `Const` UPSERT_PATH

• **UPSERT_PATH**: *"/users/:username"* = "/users/:username"

*Defined in [auth-methods/UserPassAuth.ts:9](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/UserPassAuth.ts#L9)*

___

### `Const` UPSERT_ROLE_PATH

• **UPSERT_ROLE_PATH**: *"/roles/:name"* = "/roles/:name"

*Defined in [secrets-engines/databases/BaseDatabaseEngine.ts:16](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/secrets-engines/databases/BaseDatabaseEngine.ts#L16)*

___

### `Const` UPSERT_TOKEN_ROLE_PATH

• **UPSERT_TOKEN_ROLE_PATH**: *"/roles/:role_name"* = "/roles/:role_name"

*Defined in [auth-methods/TokenAuth.ts:26](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-methods/TokenAuth.ts#L26)*

___

### `Const` WRAPPING_LOOKUP_PATH

• **WRAPPING_LOOKUP_PATH**: *"/sys/wrapping/lookup"* = "/sys/wrapping/lookup"

*Defined in [system-backends/WrappingSysBackend.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/WrappingSysBackend.ts#L5)*

___

### `Const` WRAPPING_REWRAP_PATH

• **WRAPPING_REWRAP_PATH**: *"/sys/wrapping/rewrap"* = "/sys/wrapping/rewrap"

*Defined in [system-backends/WrappingSysBackend.ts:6](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/WrappingSysBackend.ts#L6)*

___

### `Const` WRAPPING_UNWRAP_PATH

• **WRAPPING_UNWRAP_PATH**: *"/sys/wrapping/unwrap"* = "/sys/wrapping/unwrap"

*Defined in [system-backends/WrappingSysBackend.ts:7](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/WrappingSysBackend.ts#L7)*

___

### `Const` WRAPPING_WRAP_PATH

• **WRAPPING_WRAP_PATH**: *"/sys/wrapping/wrap"* = "/sys/wrapping/wrap"

*Defined in [system-backends/WrappingSysBackend.ts:8](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/system-backends/WrappingSysBackend.ts#L8)*

___

### `Const` readFileAsync

• **readFileAsync**: *__promisify__* = promisify(readFile)

*Defined in [auth-token-helpers/get-token-from-file.ts:5](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-token-helpers/get-token-from-file.ts#L5)*

## Functions

###  getTokenFromFile

▸ **getTokenFromFile**(`path`: string, `cacheToken`: boolean, `onError`: function): *[AuthTokenHelperFunc](globals.md#authtokenhelperfunc)*

*Defined in [auth-token-helpers/get-token-from-file.ts:15](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-token-helpers/get-token-from-file.ts#L15)*

Read a token from a file. Useful if using the vault agent and need to read from a file sink.

**Parameters:**

▪ **path**: *string*

Path to the file containing the token

▪`Default value`  **cacheToken**: *boolean*= true

If true, will cache the token once read. If false, will read from the file each time
the request requires a token. Default is true.

▪ **onError**: *function*

Callback for when an error is thrown

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[AuthTokenHelperFunc](globals.md#authtokenhelperfunc)*

An async function that when called, will read the file for the token

___

###  getTokenUsingIam

▸ **getTokenUsingIam**(`awsAuthClient`: [AwsAuth](classes/awsauth.md), `role`: string, `opts`: [IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md), `onError`: function): *[AuthTokenHelperFunc](globals.md#authtokenhelperfunc)*

*Defined in [auth-token-helpers/get-token-using-iam.ts:64](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-token-helpers/get-token-using-iam.ts#L64)*

Uses AWS IAM auth to get the vault token.
- Caches the token
- Will auto-refresh if the token is refresh-able

**Parameters:**

▪ **awsAuthClient**: *[AwsAuth](classes/awsauth.md)*

an instance of the AwsAuth client

▪ **role**: *string*

The vault role to get authorization for

▪`Default value`  **opts**: *[IGetTokenUsingIamOpts](interfaces/igettokenusingiamopts.md)*= {}

▪ **onError**: *function*

Callback for when an error is thrown

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[AuthTokenHelperFunc](globals.md#authtokenhelperfunc)*

___

###  loadCredentials

▸ **loadCredentials**(): *Promise‹[IAwsCredentials](globals.md#iawscredentials)›*

*Defined in [auth-token-helpers/get-token-using-iam.ts:77](https://github.com/theogravity/vault-tacular/blob/2b36c08/src/auth-token-helpers/get-token-using-iam.ts#L77)*

**Returns:** *Promise‹[IAwsCredentials](globals.md#iawscredentials)›*
