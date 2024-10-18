module.exports = {
  /**
   * allow devDependencies import in development
   */
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: [
      'test/**', // tape, common npm pattern
      'tests/**', // also common npm pattern
      'spec/**', // mocha, rspec-like pattern
      '**/__tests__/**', // jest pattern
      '**/__mocks__/**', // jest pattern
      'test.{js,jsx}', // repos with a single test file
      'test-*.{js,jsx}', // repos with multiple top-level test files
      '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
      '**/jest.config.js', // jest config
      '**/jest.setup.js', // jest setup
      '**/vue.config.js', // vue-cli config
      '**/webpack.config.js', // webpack config
      '**/webpack.config.*.js', // webpack config
      '**/rollup.config.js', // rollup config
      '**/rollup.config.*.js', // rollup config
      '**/gulpfile.js', // gulp config
      '**/gulpfile.*.js', // gulp config
      '**/Gruntfile{,.js}', // grunt config
      '**/protractor.conf.js', // protractor config
      '**/protractor.conf.*.js', // protractor config
      '**/karma.conf.js', // karma config
      '**/.eslintrc.js', // eslint config
      '**/vite.config.js',
      '**/vite.config.ts',
      '!src/**/*',
    ],
    optionalDependencies: false,
  }],
  /**
   * Enable the rule that requires a newline after imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
   */
  'import/newline-after-import': 'error',
  /**
   * Compatible with external type declarations in TypeScript 3.8
   * inline type declarations require a higher version of TypeScript.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  /**
   * Sets the rule for file extensions in imports.
   * - Ignores extensions for packages.
   * - Does not require extensions for JS and JSX files.
   * - Does not require extensions for TS and TSX files.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
   */
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
};
