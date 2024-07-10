import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vuejs-rout",
  plugins: [vue()],
  resolve:{
    alias:{
      find: '@', replacement: path.resolve(__dirname, './src')
    }
  },
  server:{
    port: 3000,
  },
})
