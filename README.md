English | [中文](./README.zh-CN.md)

# eslint-config-outsider

This project provides an extendable ESLint configuration for frontend code standards, supporting JavaScript, TypeScript, React, and Vue projects.

This project has the following features:
1. Supports JavaScript, TypeScript, React, and Vue projects.
2. No need to use Prettier for code beautification when using this project; embrace [stylistic](https://eslint.style/). references the article [antfu - Why I don't use Prettier](https://antfu.me/posts/why-not-prettier).
3. Compatible with and inherits the best practices from eslint-config-airbnb-base. Due to the outdated state of eslint-config-airbnb-base, this project disables rules related to code style and uses [stylistic](https://eslint.style/) for code style validation.
4. Compatible with and inherits the best practices from eslint-config-airbnb-typescript. Due to the outdated state of eslint-config-airbnb-typescript, this project removes deprecated rules in typescript-eslint@8, making it work perfectly with typescript-eslint@8.

Globally, [stylistic](https://eslint.style/) is used for code style beautification and validation.

For JavaScript rules, this project extends the excellent JavaScript standard [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base). However, due to the lack of maintenance in that project, this project disables rules related to code style and uses [stylistic](https://eslint.style/) for code style validation.

For TypeScript rules, this project extends the excellent TypeScript standard [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript). However, due to compatibility issues with eslint-typescript@8, this project only adopts some rules from eslint-config-airbnb-typescript and resolves the compatibility issues with eslint-typescript@8.

For React rules, this project uses `eslint-plugin-react/recommended` and `eslint-plugin-react-hooks/recommended`. If you need a11y content, please add it yourself.

For Vue rules, this project uses `eslint-plugin-vue/recommended`.

This project continues to use ESLint@8 and does not adopt the flat config introduced in ESLint@9.

## Usage

This project provides configurable options for the following types of projects:

- JavaScript
- TypeScript
- React
- Vue3
- Vue2

---

| Project Type | Extends | Description |
| ---- | ------- | ----------- |
| JavaScript | eslint-config-outsider/javascript | Provides ESLint configuration for JavaScript projects |
| TypeScript | eslint-config-outsider | (default) Provides ESLint configuration for mixed JavaScript + TypeScript projects |
| React | eslint-config-outsider/react | Provides ESLint configuration for React projects |
| Vue3 | eslint-config-outsider/vue3 | Provides ESLint configuration for Vue3 projects, supports Vue 2.7 |
| Vue2 | eslint-config-outsider/vue2 | Provides ESLint configuration for Vue2 projects |

## Installation

```shell
npm i -D eslint-config-outsider
```

Assuming a TypeScript project, create `.eslintrc.cjs` file in your project root:

```js
module.exports = {
  root: true,
  extends: [
    'eslint-config-outsider'
  ],
  parserOptions: {
    project: true, // or replaced by path of tsconfig.json file
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'public',
  ],
};
```

### TypeScript

For TypeScript projects, you need to configure parserOptions.project to point to your tsconfig.json file.

You can set parserOptions.project to true to use the tsconfig.json file in the current directory. If the project cannot find the tsconfig.json file, you can set parserOptions.project to the specific path of the tsconfig.json file.

### Vite

If your project uses Vite, the tsconfig file may have a references field, such as:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

You need to set parserOptions.project to an array:

```js
parserOptions: {
  project: [
    `${__dirname}/tsconfig.json`,
    `${__dirname}/tsconfig.app.json`,
    `${__dirname}/tsconfig.node.json`,
  ],
}
```

## References
- [antfu - Why I don't use Prettier](https://antfu.me/posts/why-not-prettier)
- [eslint](https://eslint.org/docs/v8.x/)
- [stylistic](https://eslint.style/)
- [github - typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
