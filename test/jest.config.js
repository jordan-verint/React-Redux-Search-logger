module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/source/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/source/js/index.js",
    "!**/source/js/containers/Library/**"
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/jest.setup.js"
};
