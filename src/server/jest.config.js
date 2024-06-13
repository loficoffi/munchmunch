const config  = {
    verbose: true, // This option tells Jest to be verbose in its output
    testEnvironment: 'node', // Specifies the test environment
    collectCoverage: true, // Indicates whether Jest should collect coverage information while running tests
    coverageDirectory: 'coverage', // Specifies where to output coverage reports
    testPathIgnorePatterns: ['/node_modules/'], // Tells Jest to ignore test files in the node_modules directory
    coveragePathIgnorePatterns: ['/node_modules/'], // Tells Jest to ignore coverage collection for files in node_modules
};

export default config;