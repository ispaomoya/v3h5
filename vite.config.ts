import { defineConfig, loadEnv } from 'vite'
import postCssPxToRem from 'postcss-pxtorem'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 路径
const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
}
// 配置快捷路径
const alias: Record<string, string> = {
  '/@': pathResolve('./src/'),
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), 'ENV')
  return {
    plugins: [vue()],
    root: process.cwd(), // 项目根目录
    base: command === 'serve' ? './' : env.VITE_PUBLIC_PATH, // 基础路径
    resolve: { alias },
    // 配置服务
    server: {
      host: '0.0.0.0', // 监听ip
      port: env.VITE_PORT as unknown as number, // 端口号
      open: env.VITE_OPEN, // 启动时自动在浏览器中打开
      proxy: {
        '/v1': {
          target: 'http://192.168.0.118:8888',
          ws: true, // 是否启用websockets
          changeOrigin: true, // 运行跨域
          // rewrite: (path) => path.replace(/^\/v1/, ''), // 重写路径
        },
      },
    },
    // 配置打包
    build: {
      outDir: 'dist', // 相对根目录下的路径
      sourcemap: false, // 是否生成源map
      chunkSizeWarningLimit: 1500, // 触发chunk警告大小
      rollupOptions: {
        output: { // 输出文件  https://rollupjs.org/guide/en/#big-list-of-options
          entryFileNames: `assets/js/[name]-entry-[hash].${new Date().getTime()}.js`, // 用于从入口点创建的块的模式
          chunkFileNames: `assets/js/[name]-chunk-[hash].${new Date().getTime()}.js`, // 用于命名代码拆分时创建的共享块的模式
          assetFileNames: `assets/[ext]/[name]-asset-[hash].${new Date().getTime()}.[ext]`, // 用于命名自定义发射资产以包含在构建输出中的模式
          compact: true, // 这将缩小汇总生成的包装器代码。请注意，这不会影响用户编写的代码。此选项在捆绑预压缩代码时很有用
          manualChunks: { // 创建自定义共享公共块
            vue: ['vue', 'vue-router']
          },
        },
      },
      terserOptions: { // https://terser.org/docs/api-reference#minify-options
        compress: { // 自定义压缩
          drop_console: true, // 删除console.*的代码
          drop_debugger: true, // 删除断点
        },
        ie8: true, // 支持ie8
        output: { // 输出代码格式
          comments: true, // 保留所有注释
        },
      },
    },
    // 配置css
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
          postCssPxToRem({
            rootValue: 37.5, // 1rem 的大小
            propList: ['*'], // 需要转换的属性，*(全部转换)
            unitPrecision: 6 // 转换精度，保留的小数位数
          })
        ],
      },
    },
  }

})