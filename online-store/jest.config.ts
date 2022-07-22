module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^(.{1,2}/.*).js$': '$1',
  },
  rootDir: './test',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  resetMocks: false,
  verbose: true,
};
