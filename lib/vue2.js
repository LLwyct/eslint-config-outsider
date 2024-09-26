module.exports = {
  extends: [require.resolve('./base.js')],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/recommended'],
    },
  ],
};
