import { UserPassAuth } from '../../auth-methods/UserPassAuth'
import { UserPassTokenManager } from '../get-token-from-user-pass'

const TEST_USER = 'test-user'
const TEST_PASS = 'test-pass'
const TEST_TOKEN = 'test-token'

jest.useFakeTimers()

describe('get-token-from-user-pass', () => {
  describe('UserPassTokenManager', () => {
    let auth

    beforeEach(() => {
      auth = new UserPassAuth(process.env.VAULT_API_URL)
    })

    it('should create a new manager', () => {
      const manager = new UserPassTokenManager({
        userPassAuthClient: auth,
        username: TEST_USER,
        password: TEST_PASS,
        onError: () => {}
      })

      expect(manager).toBeDefined()
    })

    it('should get token (no refresh)', async () => {
      const getTokenMock = jest.spyOn(auth, 'login') as jest.Mock

      getTokenMock.mockResolvedValueOnce({
        result: {
          auth: {
            client_token: TEST_TOKEN,
            renewable: false
          }
        }
      })

      const manager = new UserPassTokenManager({
        userPassAuthClient: auth,
        username: TEST_USER,
        password: TEST_PASS,
        onError: () => {}
      })

      await expect(manager.getToken()).resolves.toEqual(TEST_TOKEN)
    })

    it('should get a token (with refresh)', async () => {
      const getTokenMock = jest.spyOn(auth, 'login') as jest.Mock

      getTokenMock.mockResolvedValue({
        result: {
          auth: {
            client_token: TEST_TOKEN,
            renewable: true,
            lease_duration: 1000
          }
        }
      })

      const manager = new UserPassTokenManager({
        userPassAuthClient: auth,
        username: TEST_USER,
        password: TEST_PASS,
        onError: () => {}
      })

      await manager.getToken()

      jest.runAllTimers()

      expect(setTimeout).toHaveBeenCalledTimes(1)
      // 1000 secs * 1000 ms / s
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000000)
    })

    it('should trigger retry if the API call fails', async done => {
      const getTokenMock = jest.spyOn(auth, 'login') as jest.Mock

      getTokenMock.mockImplementation(() => {
        throw new Error('API failure')
      })

      const manager = new UserPassTokenManager({
        userPassAuthClient: auth,
        username: TEST_USER,
        password: TEST_PASS,
        onError: (err, retryCount) => {
          // make sure the next retry executes quickly
          jest.runAllTimers()
          expect(err.message).toBe('API failure')
          // initial call, then the two retries
          if (retryCount === 2) {
            done()
          }
        },
        retryOpts: {
          retries: 2,
          randomize: false
        }
      })

      await manager.getToken()
    })
  })
})
