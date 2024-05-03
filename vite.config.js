import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // 引入全域的SCSS變數
                additionalData: `@import "@/assets/scss/main.scss";`,
            },
        },
        devSourcemap: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    // base:'/CLUCKDOM/',
})
