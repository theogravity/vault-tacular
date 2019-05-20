import { InitSysBackend } from '../InitSysBackend'

const sys = new InitSysBackend(process.env.VAULT_API_URL)

describe('InitSysBackend integration test', () => {
  it('should get init status', async () => {
    const status = await sys.readInitStatus()

    expect(status.result.initialized).toBeDefined()
  })

  // Disabled as vault is init in the integration tests already
  xit('should init vault', async () => {
    const init = await sys.startInit({
      secret_shares: 1,
      secret_threshold: 1
    })

    expect(init.result.keys).toBeDefined()
  })
})
