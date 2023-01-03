import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'


export default defineConfig({
  plugins: [vue(), vueJsx(), viteMockServe({
    mockPath: "./Mock/",
    watchFiles: true,
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    cors: true,
  }
})
