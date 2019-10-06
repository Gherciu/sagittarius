module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/sagittarius-core/*.(ts)',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  preset: 'ts-jest',
}
