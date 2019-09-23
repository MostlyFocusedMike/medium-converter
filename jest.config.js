module.exports = {
    roots: [
        '<rootDir>/src',
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // just jest got by fine using this line
    },
};
