import { Kv1SecretEngine } from '../Kv1SecretEngine'

const engine = new Kv1SecretEngine(process.env.VAULT_API_URL, {
  authToken: () => {
    return process.env.VAULT_TOKEN
  },
  mount: 'kv1'
})

describe('Kv1SecretEngine integration tests', () => {
  it('should create and read a secret', async () => {
    await engine.createOrUpdateSecret('test-path', {
      test: 123
    })

    const rslt = await engine.readSecret('test-path')
    expect(rslt.result.data.test).toEqual(123)
  })

  it('should list secrets', async () => {
    await engine.createOrUpdateSecret('test-path2', {
      test: 123,
      abc: 'onetwothree'
    })

    const rslt = await engine.listSecrets('')

    expect(rslt.result.data.keys.includes('test-path2')).toBe(true)
  })

  it('should delete a secret', async () => {
    await engine.createOrUpdateSecret('test-path3', {
      test: 123
    })

    await engine.deleteSecret('test-path3')

    const throwFn = async () => {
      await engine.readSecret('test-path3')
    }

    await expect(throwFn()).rejects.toMatchSnapshot()
  })
})
