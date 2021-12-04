module.exports = {
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        "\\.tsx?$": "ts-jest",
    },
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
    setupFiles: ["<rootDir>/src/__tests__/__mocks__/browserMocks.js"],
    testURL: "http://localhost:8080",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/tests/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "identity-obj-proxy",
        "^./style$": "identity-obj-proxy",
        "^preact$": "<rootDir>/node_modules/preact/dist/preact.min.js",
        "^react$": "preact-compat",
        "^react-dom$": "preact-compat",
        "^react-dom/test-utils$": "preact/test-utils",
        "^create-react-class$": "preact-compat/lib/create-react-class",
        "^react-addons-css-transition-group$": "preact-css-transition-group",
    },
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
};
