module.exports = {
  extends: [require.resolve('./base.js')],
  overrides: [
    {
      files: [
        '**/*.jsx',
        '**/*.mjsx',
        '**/*.tsx',
        '**/*.mtsx',
      ],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // custom react rules
        'react/jsx-uses-vars': 'warn',
        'react/jsx-uses-react': 'warn',

        // https://github.com/benmosher/eslint-plugin-import/tree/main/docs/rules
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'warn',
        'import/no-webpack-loader-syntax': 'error',
      },
    },
  ],
};
