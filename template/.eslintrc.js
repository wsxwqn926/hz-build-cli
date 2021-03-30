/*
 * @Author: your name
 * @Date: 2021-03-26 11:55:51
 * @LastEditTime: 2021-03-27 18:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lerna-cil2\.eslintrc.js
 */
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-multiple-template-root": 0,
    "semi": 2,//语句强制分号结尾
    '@typescript-eslint/no-unused-vars': 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "new-cap": 2,
    "quotes": 2,
    "eol-last": 2,// 文件末尾强制换行
    "indent": ["off", 2],//缩进风格
    "comma-dangle": ["error", "never"],
    "space-before-function-paren":  ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
  }
};