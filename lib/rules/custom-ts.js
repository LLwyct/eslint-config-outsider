module.exports = {
  /**
   * turn on errors for missing imports
   * @by https://www.npmjs.com/package/eslint-import-resolver-typescript
   */
  'import/no-unresolved': 'error',
  /**
   * Warns about explicit use of `any`.
   * - Allows `any` for rest parameters.
   * - Does not automatically convert `any` to `unknown`.
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any': ['warn', {
    ignoreRestArgs: true,
    fixToUnknown: false,
  }],
  /**
   * error when declare array type
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type': ['error', {
    default: 'array-simple',
    readonly: 'array-simple',
  }],
  /**
   * Disables the rule that forbids unused variables.
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars': 'off',
  /**
   * Enables TypeScript's no-unused-vars rule.
   * - Warns about all unused variables.
   * - Ignores variables starting with `_`.
   * - Ignores rest parameters.
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars': ['error', {
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    ignoreRestSiblings: true,
  }],
  /**
   * Disables the rule that forbids using variables before they are defined.
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define': 'off',
  /**
   * Enables TypeScript's no-use-before-define rule.
   * disallow defination before use unexcept
   * foo();
   * const foo = () => {};
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
    classes: true,
    variables: true,
    allowNamedExports: true,
    enums: true,
  }],
  /**
   * Enables TypeScript's consistent-type-exports rule.
   * when tsconfig.json has isolatedModules: true, type must be exported by 'export type'
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports': 'error',
  /**
   * Enables TypeScript's consistent-type-imports rule.
   * type must be imported by 'import type'
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports': ['error', {
    prefer: 'type-imports',
    fixStyle: 'separate-type-imports',
  }],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: [
        'camelCase',
        'PascalCase',
        'UPPER_CASE',
      ],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'function',
      format: [
        'camelCase',
        'PascalCase',
      ],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: [
        'PascalCase',
      ],
    },
  ],
};
