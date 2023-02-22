import type { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'node:path'
import { viteMockServe } from 'vite-plugin-mock'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { sshPlugin } from './vite-plugin-ssh/vite-plugin-ssh'

export default ({ command }: ConfigEnv): UserConfigExport => {
  let prodMock = true
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: './Mock/',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from '../Mock/mockProdServer';
          setupProdMockServer();
        `
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svgIcon')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      sshPlugin({
        entryPath: './dist',
        host: 'localhost',
        port: 2222,
        username: 'gxio',
        password: '123456789',
        remotePath: '/home/gxio/nginxTest/www/www.nginxtest.com'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(process.cwd(), './src')
      }
    },
    server: {
      open: true,
      cors: true
    },
  }
}
