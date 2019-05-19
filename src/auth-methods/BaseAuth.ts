import {
  IBaseLoginPayload,
  ISecret
} from '../interfaces/auth-methods/IBaseAuth'
import { IVaultResponse } from '../interfaces'
import { BaseClient } from '../BaseClient'

export abstract class BaseAuth extends BaseClient {}
