listener "tcp" {
  address = "0.0.0.0:8300"
  tls_disable = 0
  tls_cert_file = "test-certs/localhost.crt"
  tls_key_file = "test-certs/localhost.key"
}
