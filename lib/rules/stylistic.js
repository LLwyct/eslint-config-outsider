module.exports = {
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/brace-style': ['error', '1tbs', {
    allowSingleLine: false,
  }],
  '@stylistic/max-len': ['error', {
    code: 100,
    comments: 80,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreTemplateLiterals: true,
  }],
};
