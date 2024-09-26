[English](./README.md) | 中文

# eslint-config-outsider

本项目是一个eslint的可扩展配置，用于配置前端代码规范，支持Javascript、Typescript、React、Vue项目。

本项目有以下特点：
1. 支持JavaScript、Typescript、React、Vue项目。
2. 如果使用本项目不需要再使用 prettier 进行代码美化，拥抱[stylistic](https://eslint.style/)。参考这篇文章 [antfu - 为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh).
3. 兼容并继承了eslint-config-airbnb-base的最佳实践。由于eslint-config-airbnb-base年久失修，本项目关闭了和code style相关的规则，使用了[stylistic](https://eslint.style/)进行代码风格的校验。
4. 兼容并继承了eslint-config-airbnb-typescript的最佳实践。由于eslint-config-airbnb-typescript年久失修，本项目移除了 typescript-eslint@8 废弃的规则，使其可以完美地在 typescript-eslint@8 下工作。

在全局上，使用了[stylistic](https://eslint.style/)进行代码风格的美化校验。

在JavaScript规则上，本项目扩展了优秀的javascript规范 [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)，但是由于该项目很久没有维护，为了兼容新的eslint变更，本项目关闭了和code style相关的规则。

在TypeScript规则上，本项目扩展了优秀的typescript规范 [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)，但是由于该项目也很久没有维护，对于eslint-typescript@8存在兼容性问题，本项目仅沿用了eslint-config-airbnb-typescript的部分规则，解决了eslint-typescript@8的兼容性问题。

在 React 规则上，本项目使用了 `eslin-plugin-react/recommended` 和 `eslint-plugin-react-hooks/recommended`。如果需要 a11y 的内容请自行添加。

在 Vue 规则上，本项目使用了 `eslint-plugin-vue/recommended`。

本项目继续使用 eslint@8，并没有使用 eslint@9 新增的 flat config 特性。

## 用法

本项目为以下类型的项目提供可配置项：

- JavaScript
- Typescript
- React
- Vue3
- Vue2

---

| 项目类型 | extends | 描述 |
| ---- | ------- | ----------- |
| JavaScript | eslint-config-outsider/javascript | 为JavaScript项目提供eslint配置 |
| Typescript | eslint-config-outsider | （默认）为JavaScript + Typescript混合项目提供eslint配置 |
| React | eslint-config-outsider/react | 为React项目提供eslint配置 |
| Vue3 | eslint-config-outsider/vue3 | 为Vue3代码风格项目提供eslint配置 支持Vue2.7 |
| Vue2 | eslint-config-outsider/vue2 | 为Vue2代码风格项目提供eslint配置 |


## 安装

```shell
npm i -D eslint-config-outsider
```

假设以 typescript 项目为例，在项目根目录创建 `.eslintrc.cjs`文件：

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

### Typescript

如果是Typescript项目，需要额外配置`parserOptions.project`，指向你的tsconfig.json文件。

可以设置`parserOptions.project`为`true`，表示使用当前目录下的tsconfig.json文件。如果项目表示找不到tsconfig.json文件，可以设置`parserOptions.project`为具体的tsconfig.json文件路径。

### Vite

如果你的项目使用Vite，tsconfig文件可能有references字段，如：

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

需要将`parserOptions.project`设置为数组：

```js
parserOptions: {
  project: [
    `${__dirname}/tsconfig.json`,
    `${__dirname}/tsconfig.app.json`,
    `${__dirname}/tsconfig.node.json`,
  ]
},
```

## 参考
- [antfu - Why I don't use Prettier](https://antfu.me/posts/why-not-prettier-zh)
- [eslint](https://eslint.org/docs/v8.x/)
- [stylistic](https://eslint.style/)
- [github - typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
