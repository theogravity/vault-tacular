import { IamTokenManager } from '../get-token-using-iam'
import { AwsAuth } from '../..'

const TEST_VAULT_URL = 'http://localhost'
const TEST_ROLE = 'test-role'
const TEST_TOKEN = 'test-token'

jest.mock('awscred', () => {
  return {
    load: fn => {
      fn(null, {
        credentials: {}
      })
    }
  }
})

jest.useFakeTimers()

describe('get-token-using-iam', () => {
  describe('IamTokenManager', () => {
    let auth

    beforeEach(() => {
      auth = new AwsAuth(TEST_VAULT_URL)
    })

    it('should create a new manager', () => {
      const manager = new IamTokenManager(auth, TEST_ROLE)

      expect(manager).toBeDefined()
    })

    it('should get token (no refresh)', async () => {
      const getTokenMock = jest.spyOn(
        auth,
        'getTokenUsingIamLogin'
      ) as jest.Mock
      getTokenMock.mockResolvedValueOnce({
        result: {
          auth: {
            client_token: TEST_TOKEN,
            renewable: false
          }
        }
      })

      const manager = new IamTokenManager(auth, TEST_ROLE)

      await expect(manager.getToken()).resolves.toEqual(TEST_TOKEN)
    })

    it('should get a token (with refresh)', async () => {
      const getTokenMock = jest.spyOn(
        auth,
        'getTokenUsingIamLogin'
      ) as jest.Mock
      getTokenMock.mockResolvedValue({
        result: {
          auth: {
            client_token: TEST_TOKEN,
            renewable: true,
            lease_duration: 1000
          }
        }
      })

      const manager = new IamTokenManager(auth, TEST_ROLE)
      await manager.getToken()

      jest.runAllTimers()

      expect(setTimeout).toHaveBeenCalledTimes(1)
      // 1000 secs * 1000 ms / s
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000000)
    })
  })
})
