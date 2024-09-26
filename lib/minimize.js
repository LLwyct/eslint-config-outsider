/* eslint-env node */
const stylistic = require('@stylistic/eslint-plugin');
const customJsRules = require('./rules/custom-js');
const stylisticRules = require('./rules/stylistic');
const importRules = require('./rules/import');

/**
 * minimize only contains
 * - JavaScript lint specification
 * - basic prettier like specification
 * - and JavaScript import lint specification.
 */
const customizedStylisticConfig = stylistic.configs.customize({
  jsx: true,
});

module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    require.resolve('./extends/deprecated-airbnb-js.js'),
    'plugin:import/recommended',
    'plugin:@stylistic/recommended-extends',
  ],
  rules: {
    ...customJsRules,
    ...importRules,
    ...customizedStylisticConfig.rules,
    ...stylisticRules,
  },
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/public/**',
    '*.min.js',
    '*.min.css',
    '*.json',
  ],
};
