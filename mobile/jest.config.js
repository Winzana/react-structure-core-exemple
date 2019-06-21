const { jestPreset: tsJest } = require('ts-jest');
const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    //'^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(ts|tsx)': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-size-matters|react-redux|react-native-paper|react-native-safe-area-view|react-native-vector-icons|react-navigation-stack|react-native-gesture-handler|NativeModules|@react-navigation/.*|react-native-screens)/)',
  ],
  setupFiles: ['./setupTest.ts'],
  cacheDirectory: '.jest/cache',
};
