import { AwsAuth } from './auth-methods/AwsAuth'
import { BaseAuth } from './auth-methods/BaseAuth'
import { UserPassAuth } from './auth-methods/UserPassAuth'
import { TlsCertificateAuth } from './auth-methods/TlsCertificateAuth'
import { TokenAuth } from './auth-methods/TokenAuth'

import { BaseSysBackend } from './system-backends/BaseSysBackend'
import { HealthSysBackend } from './system-backends/HealthSysBackend'
import { RotateSysBackend } from './system-backends/RotateSysBackend'
import { UnsealSysBackend } from './system-backends/UnsealSysBackend'
import { InitSysBackend } from './system-backends/InitSysBackend'

import { BaseSecretEngine } from './secrets-engines/BaseSecretEngine'
import { Kv1SecretEngine } from './secrets-engines/Kv1SecretEngine'
import { Kv2SecretEngine } from './secrets-engines/Kv2SecretEngine'

import { PostgreSqlEngine } from './secrets-engines/databases/PostgreSqlEngine'
import { BaseDatabaseEngine } from './secrets-engines/databases/BaseDatabaseEngine'
import { WrappingSysBackend } from './system-backends/WrappingSysBackend'
import { getTokenFromFile } from './auth-token-funcs/get-token-from-file'

export default {
  BaseAuth,
  AwsAuth,
  TlsCertificateAuth,
  UserPassAuth,
  TokenAuth,

  BaseSecretEngine,
  Kv1SecretEngine,
  Kv2SecretEngine,

  BaseDatabaseEngine,
  PostgreSqlEngine,

  BaseSysBackend,
  HealthSysBackend,
  InitSysBackend,
  RotateSysBackend,
  UnsealSysBackend,
  WrappingSysBackend,

  getTokenFromFile
}
