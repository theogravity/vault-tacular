import { Kv2SecretEngine } from '../Kv2SecretEngine'

const engine = new Kv2SecretEngine(process.env.VAULT_API_URL, {
  authTokenFn: () => {
    return process.env.VAULT_TOKEN
  },
  mount: 'kv2'
})

describe('Kv2SecretEngine integration tests', () => {
  it('creates and reads a secret', async () => {
    await engine.createOrUpdateSecret('test-path', {
      data: {
        blah: 'abc',
        blah2: {
          blah3: 'def'
        }
      }
    })

    const sec = await engine.readSecretVersion('test-path')

    expect(sec.result.data.data).toMatchObject({
      blah: 'abc',
      blah2: {
        blah3: 'def'
      }
    })
  })

  it('lists secrets', async () => {
    await engine.createOrUpdateSecret('test-path2', {
      data: {
        blah: 'abc',
        blah2: {
          blah3: 'def'
        }
      }
    })

    const list = await engine.listSecrets('')
    expect(list.result.data.keys.includes('test-path2')).toBe(true)
  })

  it('reads metadata', async () => {
    await engine.createOrUpdateSecret('test-path3', {
      data: {
        blah: 'abc',
        blah2: {
          blah3: 'def'
        }
      }
    })

    const meta = await engine.readSecretMetadata('test-path3')
    expect(Object.keys(meta.result.data.versions).length).toBe(1)
  })
})
