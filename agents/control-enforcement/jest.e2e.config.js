module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.e2e\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    '!src/**/*.spec.ts',
  ],
  coverageDirectory: './coverage-e2e',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@compiledger/common$': '<rootDir>/../../libs/common/src',
    '^@compiledger/database$': '<rootDir>/../../libs/database/src',
  },
  testTimeout: 30000, // E2E tests may take longer
};
