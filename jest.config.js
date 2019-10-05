module.exports = {
  collectCoverageFrom: ['packages/**/*.(ts)'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  preset: 'ts-jest',
}
