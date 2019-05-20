module.exports = {
  name: 'Vault client for node.js',
  theme: 'markdown',
  readme: 'api-docs-index.md',
  externalPattern: 'node_modules',
  module: 'commonjs',
  exclude: '**/__tests__/**/*.ts',
  excludeProtected: true,
  excludePrivate: true,
  excludeNotExported: true,
  target: 'ES6',
  mode: 'file'
}
