module.exports = {
  "preset": "ts-jest",
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "testResultsProcessor": "./node_modules/jest-junit-reporter",
  "testEnvironment": "node",
  "testPathIgnorePatterns": [
    "/build",
    "/node_modules/",
    "test.ts"
  ]
}
module.exports = {
  "preset": "ts-jest",
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "testResultsProcessor": "./node_modules/jest-junit-reporter",
  "testEnvironment": "node",
  "testPathIgnorePatterns": [
    "/build",
    "/node_modules/"
  ],
  "testMatch": [
    "**/?(*.)+(int-test).[tj]s?(x)"
  ]
}
