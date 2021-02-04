module.exports = {
    env: {
        node: true
    },
    parserOptions: {
        project: './tsconfig.json'
    },
    ignorePatterns: ['dist/test/*', 'typedoc.js', 'docs/*'],
    extends: ['standard-with-typescript', 'prettier', 'prettier/@typescript-eslint'],
    root: true,
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'import/no-extraneous-dependencies': 'error'
    }
};