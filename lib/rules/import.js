module.exports = {
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
