module.exports = {
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
};
