require('@rushstack/eslint-patch/eslint-bulk-suppressions');

const customTsRules = require('./rules/custom-ts');

module.exports = {
  extends: [
    require.resolve('./minimize.js'),
  ],
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.cts',
        '**/*.mts',
        '**/*.tsx',
        '**/*.mtsx',
        '**/*.d.ts',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        require.resolve('./extends/deprecated-airbnb-ts.js'),
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
            // use a glob pattern
            project: '**/tsconfig.json',
          },
        },
      },
      rules: {
        ...customTsRules,
      },
    },
  ],
};
