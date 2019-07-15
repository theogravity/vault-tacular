import { readFile } from 'fs'
import { AuthTokenHelperFunc } from '../interfaces/IBaseClient'

/**
 * Read a token from a file. Useful if using the vault agent and need to read from a file sink.
 * @param path Path to the file containing the token
 * @param cacheToken If true, will cache the token once read. If false, will read from the file each time
 * the request requires a token. Default is true.
 * @returns {Function} An async function that when called, will read the file for the token
 */
export function getTokenFromFile (
  path: string,
  cacheToken: boolean = true
): AuthTokenHelperFunc {
  return () => {
    let token

    return new Promise((resolve, reject) => {
      if (token) {
        return resolve(token)
      }

      readFile(path, 'utf8', (err, contents) => {
        if (err) {
          return reject(err)
        }

        if (cacheToken) {
          token = contents.trim()
        }

        resolve(token)
      })
    })
  }
}
