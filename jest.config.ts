import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coveragePathIgnorePatterns: ["e2e"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
    "\\.module.css$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  resetMocks: true,
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{ts,tsx}",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
