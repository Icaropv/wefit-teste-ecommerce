export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  
  
  moduleNameMapper: {
    '\\.(css|less|scss|sass|jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    '^react$': '<rootDir>/node_modules/react',
  },

  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/(?!zustand)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};