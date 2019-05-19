import { AwsAuth } from './auth-methods/AwsAuth'
import { BaseAuth } from './auth-methods/BaseAuth'
import { UserPassAuth } from './auth-methods/UserPassAuth'
import { TlsCertificateAuth } from './auth-methods/TlsCertificateAuth'
import { BaseSecretEngine } from './secrets-engines/BaseSecretEngine'
import { HealthSysBackend } from './system-backends/HealthSysBackend'
import { RotateSysBackend } from './system-backends/RotateSysBackend'
import { UnsealSysBackend } from './system-backends/UnsealSysBackend'
import { InitSysBackend } from './system-backends/InitSysBackend'
import { Kv1SecretEngine } from './secrets-engines/Kv1SecretEngine'
import { BaseSysBackend } from './system-backends/BaseSysBackend'
import { Kv2SecretEngine } from './secrets-engines/Kv2SecretEngine'

export default {
  BaseAuth,
  AwsAuth,
  TlsCertificateAuth,
  UserPassAuth,

  BaseSecretEngine,
  Kv1SecretEngine,
  Kv2SecretEngine,

  BaseSysBackend,
  HealthSysBackend,
  InitSysBackend,
  RotateSysBackend,
  UnsealSysBackend
}
