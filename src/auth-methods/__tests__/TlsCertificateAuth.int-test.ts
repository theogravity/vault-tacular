import { readFileSync } from 'fs'
import { join } from 'path'
import { TlsCertificateAuth } from '../TlsCertificateAuth'

const TEST_CERTS_DIR = join(__dirname, '..', '..', '..', 'test-certs')

// note - using the root CA for login because it worked for me at the time
// using the localhost cert/key would give
// "x509: certificate is not authorized to sign other certificates"
// My goal was to make sure the endpoint is fully functional, so
// didn't want to fuss around with figuring out what was missing on the localhost cert
const rootCACert = readFileSync(join(TEST_CERTS_DIR, 'rootCA.crt'), {
  encoding: 'ASCII'
})

const certKey = readFileSync(join(TEST_CERTS_DIR, 'rootCA.key'), {
  encoding: 'ASCII'
})

const auth = new TlsCertificateAuth(process.env.VAULT_API_URL, {
  authTokenFn: () => {
    return process.env.VAULT_TOKEN
  }
})

describe('TlsCertificateAuth integration tests', () => {
  it('should login', async () => {
    await assocateRoleToCert()
    const resp = await auth.login({
      name: 'test_cert_role',
      ca: Buffer.from(rootCACert, 'ascii'),
      cert: Buffer.from(rootCACert, 'ascii'),
      key: Buffer.from(certKey, 'ascii')
    })

    expect(resp.result.auth.client_token).toBeDefined()
  })
})

async function assocateRoleToCert () {
  await auth.createRole('test_cert_role', {
    certificate: rootCACert.split('\n').join('\n')
  })
}
