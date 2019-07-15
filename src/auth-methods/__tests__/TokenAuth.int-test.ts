import cryptoRandomString from 'crypto-random-string'

import { TokenAuth } from '../TokenAuth'

const auth = new TokenAuth(process.env.VAULT_API_URL, {
  authToken: async () => {
    return process.env.VAULT_TOKEN
  }
})

describe('TokenAuth integration tests', () => {
  it('should create a token', async () => {
    const rslt = await makeToken()
    expect(rslt.result.auth.client_token).toBeDefined()
  })

  it('should lookup a token', async () => {
    const rslt = await makeToken()
    const lookup = await auth.lookupToken(rslt.result.auth.client_token)

    expect(lookup.result.data.id).toEqual(rslt.result.auth.client_token)
  })

  it('should look up token (self)', async () => {
    const lookup = await auth.lookupTokenSelf()
    expect(lookup.result.data.id).toEqual(process.env.VAULT_TOKEN)
  })

  it('should renew a token', async () => {
    const createRslt = await auth.createToken({
      id: 'test-low-ttl',
      ttl: '30s'
    })

    expect(createRslt.result.auth.renewable).toBe(true)

    const renewRslt = await auth.renewToken('test-low-ttl', {
      increment: '15s'
    })

    // Unsure why the increment says 15, instead of 30+15
    expect(renewRslt.result.auth.lease_duration).toEqual(15)
  })

  it('should revoke a token', async () => {
    const rslt = await makeToken()
    const token = rslt.result.auth.client_token
    const lookup = await auth.lookupToken(token)

    expect(lookup.result.data.id).toEqual(token)

    await auth.revokeToken(token)

    const throwFn = async () => {
      await auth.lookupToken(token)
    }

    await expect(throwFn()).rejects.toMatchSnapshot()
  })
})

async function makeToken () {
  const tokenId = cryptoRandomString({
    length: 10
  })

  return auth.createToken({
    id: tokenId
  })
}
