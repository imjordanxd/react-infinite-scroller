/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  restoreMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(j|t)sx?$': ['ts-jest', {}]
  }
};
