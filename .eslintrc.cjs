module.exports = {
  // 运行环境
  env: {
    browser: true, // 浏览器
    // node: true, // node环境
    es2021: true
  },
  // 全局变量 可预设全局变量
  // jquery 为例
  globals: {
    // 不可重写
    $: false,
    jquery: false
  },
  /**
   * 相当于继承其他的eslint配置
   * 1. 从 eslint 本身继承
   * 2. 从类似 eslint-config-xxx 的 npm 包继承
   * 3. 从 eslint 插件继承
   */
  extends: [
    // 第一种情况
    'eslint:recommended',
    // 第二种情况，一般配置的时候可以省略 `eslint-config`
    // "standard"
    // 第三种情况，可以省略包名中的 `eslint-plugin`
    // 格式一般为: `plugin:${pluginName}/${configName}`
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  /**
   * parser - 解析器
   * 默认使用 Espree 来解析但暂不支持ts因此需要引用其他解析器来解析
   */
  parser: '@typescript-eslint/parser', // @typescript-eslint/parser解析为 Espree 能够识别的代码
  /**
   * 解析器选项
   */
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest', // latest 启用最新的ES语法
    sourceType: 'module'
  },
  plugins: [
    'react',
    // 添加ts规则, 可以省略`eslint-plugin`
    // 插件只是添加了规则集，并没有使用，需要去rules中配置才能生效
    '@typescript-eslint',
    // 2.加入prettier插件
    'prettier'
  ],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    // key 为规则名，value 配置内容
    'no-cond-assign': ['error', 'always'], // error 为规则ID，第二项为规则的配置
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off'
  }
};
