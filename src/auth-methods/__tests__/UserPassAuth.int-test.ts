import cryptoRandomString from 'crypto-random-string'

import { UserPassAuth } from '../UserPassAuth'

const auth = new UserPassAuth(process.env.VAULT_API_URL)

describe('UserPassAuth integration tests', () => {
  it('should login', async () => {
    const user = await createUser()
    const resp = await auth.login(user.username, user)

    expect(resp).toMatchObject({
      statusCode: 200,
      data: {
        auth: {
          metadata: {
            username: user.username
          }
        }
      }
    })
  })
})

async function createUser () {
  const username = cryptoRandomString({
    length: 10
  })

  const password = cryptoRandomString({
    length: 10
  })

  await auth.createOrUpdateUser(process.env.VAULT_TOKEN, username, {
    password
  })

  return {
    username,
    password
  }
}
