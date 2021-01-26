export default {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/setupTestEnv.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  roots: ['src'],
};
