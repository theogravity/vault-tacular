import { readFile } from 'fs'
import { promisify } from 'util'
import { AuthTokenHelperFunc } from '../interfaces/IBaseClient'

const readFileAsync = promisify(readFile)

/**
 * Read a token from a file. Useful if using the vault agent and need to read from a file sink.
 * @param path Path to the file containing the token
 * @param cacheToken If true, will cache the token once read. If false, will read from the file each time
 * the request requires a token. Default is true.
 * @param onError Callback for when an error is thrown
 * @returns {Function} An async function that when called, will read the file for the token
 */
export function getTokenFromFile (
  path: string,
  cacheToken: boolean = true,
  onError: (err: Error) => void
): AuthTokenHelperFunc {
  return async () => {
    let token

    if (token) {
      return token
    }

    try {
      const contents = await readFileAsync(path, 'utf8')

      if (cacheToken) {
        token = contents.trim()
      }

      return token
    } catch (err) {
      if (onError) {
        onError(err)
      } else {
        console.error(err)
      }
    }
  }
}
