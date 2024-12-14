module.exports = {
  extends: ['prettier', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ]
  }
};
