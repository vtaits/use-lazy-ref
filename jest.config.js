export default {
  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  extensionsToTreatAsEsm: ['.ts'],

  transform: {
    '\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
