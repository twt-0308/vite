import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path';
import autoprefixer from 'autoprefixer';
import windiCSS from 'vite-plugin-windicss';
// eslint
import viteEslint from 'vite-plugin-eslint';
// stylelint
import styleLint from 'vite-plugin-stylelint';

// normalizePath 解决window下路径错误
// 全局scss路径
const variablePath = normalizePath(
  path.resolve(__dirname, './src/assets/variable.scss')
);

// https://vitejs.dev/config/
export default defineConfig({
  // 指向静态文件
  publicDir: path.resolve(__dirname, 'public'),
  // 修改index.html地址
  root: path.resolve(__dirname, 'src'),
  plugins: [
    windiCSS(),
    react(),
    viteEslint(),
    styleLint({
      // 对某些文件排除检查
      exclude: ['node_modules']
    })
  ],
  // css 相关配置
  css: {
    modules: {
      // name: 表示文件名，local: 表示类名
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // additionalData 会在每个scss文件开头引入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定浏览器
          overrideBrowserslist: ['> 1%', 'last 2 versions']
        })
      ]
    }
  }
});
