import cryptoRandomString from 'crypto-random-string'

import { TokenAuth } from '../TokenAuth'

const auth = new TokenAuth(process.env.VAULT_API_URL, {
  authTokenFn: () => {
    return process.env.VAULT_TOKEN
  }
})

describe('TokenAuth integration tests', () => {
  it('should create a token', async () => {
    const rslt = await makeToken()
    expect(rslt.data.auth.client_token).toBeDefined()
  })

  it('should lookup a token', async () => {
    const rslt = await makeToken()
    const lookup = await auth.lookupToken(rslt.data.auth.client_token)

    expect(lookup.data.data.id).toEqual(rslt.data.auth.client_token)
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
