import { IBaseLoginPayload } from './IBaseAuth'

export namespace IAwsAuth {
  export interface ILoginPayload extends IBaseLoginPayload {
    iam_http_request_method?: string
    iam_request_url?: string
    iam_request_body?: string
    iam_request_headers?: string
    identity?: string
    signature?: string
    pcks7?: string
  }

  export interface IBaseAwsLoginPayload extends IBaseLoginPayload {
    /**
     * Name of the role against which the login is being attempted. If role is not specified, then
     * the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
     * is trying to login if using the ec2 auth method, or the "friendly name"
     * (i.e., role name or username) of the IAM principal authenticated. If a matching role is not
     * found, login fails.
     */
    role?: string

    /**
     * The nonce to be used for subsequent login requests. If this parameter is not specified
     * at all and if reauthentication is allowed, then the method will generate a random nonce,
     * attaches it to the instance's identity-whitelist entry and returns the nonce back as part of
     * auth metadata. This value should be used with further login requests, to establish client
     * authenticity. Clients can choose to set a custom nonce if preferred, in which case,
     * it is recommended that clients provide a strong nonce. If a nonce is provided
     * but with an empty value, it indicates intent to disable reauthentication.
     * Note that, when disallow_reauthentication option is enabled on either
     * the role or the role tag, the nonce holds no significance. This is ignored unless
     * using the ec2 auth method.
     */
    nonce?: string
  }

  export interface ILoginIamPayload extends IBaseAwsLoginPayload {
    /**
     * Required for IAM auth
     * HTTP method used in the signed request. Currently only POST is supported,
     * but other methods may be supported in the future. This is required when
     * using the iam auth method.
     */
    iam_http_request_method: string

    /**
     * Required for IAM auth
     * Base64-encoded HTTP URL used in the signed request. Most likely just
     * aHR0cHM6Ly9zdHMuYW1hem9uYXdzLmNvbS8= (base64-encoding of https://sts.amazonaws.com/)
     * as most requests will probably use POST with an empty URI. This is required when
     * using the iam auth method.
     */
    iam_request_url: string

    /**
     * Required for IAM auth
     * Base64-encoded body of the signed request.
     * Most likely QWN0aW9uPUdldENhbGxlcklkZW50aXR5JlZlcnNpb249MjAxMS0wNi0xNQ==
     * which is the base64 encoding of Action=GetCallerIdentity&Version=2011-06-15.
     * This is required when using the iam auth method.
     */
    iam_request_body: string

    /**
     * Required for IAM auth
     * Key/value pairs of headers for use in the sts:GetCallerIdentity HTTP requests headers.
     * Can be either a Base64-encoded, JSON-serialized string, or a JSON object of key/value pairs.
     * The JSON serialization assumes that each header key maps to either a string value or an array
     * of string values (though the length of that array will probably only be one).
     * If the iam_server_id_header_value is configured in Vault for the aws auth mount,
     * then the headers must include the X-Vault-AWS-IAM-Server-ID header, its value must match
     * the value configured, and the header must be included in the signed headers.
     * This is required when using the iam auth method.
     */
    iam_request_headers: string
  }

  export interface ILoginEc2Payload extends IBaseAwsLoginPayload {
    /**
     * Required for ec2 auth
     * Base64 encoded EC2 instance identity document. This needs to be supplied along with the
     * signature parameter. If using curl for fetching the identity document, consider using the
     * option -w 0 while piping the output to base64 binary.
     */
    identity: string

    /**
     * Required for ec2 auth
     * Base64 encoded SHA256 RSA signature of the instance identity document.
     * This needs to be supplied along with identity parameter when using the ec2 auth method.
     */
    signature: string

    /**
     * Required for ec2 auth
     * PKCS7 signature of the identity document with all \n characters removed. Either this needs to
     * be set OR both identity and signature need to be set when using the ec2 auth method.
     */
    pcks7: string
  }

  export interface IGetTokenUsingIamLoginPayload {
    /**
     * Name of the role against which the login is being attempted. If role is not specified, then
     * the login endpoint looks for a role bearing the name of the AMI ID of the EC2 instance that
     * is trying to login if using the ec2 auth method, or the "friendly name"
     * (i.e., role name or username) of the IAM principal authenticated. If a matching role is not
     * found, login fails.
     */
    role: string
    /**
     * AWS credentials for use with signing the login request to AWS STS by the aws4 module. If not defined,
     * process.env.
     */
    credentials?: IAwsCredentials
    /**
     * AWS STS region, which determines the sts url to use.
     */
    stsRegion?: string
    /**
     * Additional headers to pass / encode for the aws sts:GetCallerIdentity call
     * This could include the Vault-AWS-IAM-Server-ID header that may be required by certain
     * vault configurations
     */
    iamRequestHeaders?: {
      [key: string]: string
    }
  }

  export interface IAwsCredentials {
    accessKeyId?: string
    secretAccessKey?: string
    sessionToken?: string
  }
}
