import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
    base : '',
    plugins: [vue(), {
        ...copy({
            targets: [
                {
                    src: 'plugin.json',
                    dest: 'dist/',
                    transform: (contents, filename) => contents.toString().replace('http://127.0.0.1:3000', 'index.html')
                },
                {src: 'preload.js', dest: 'dist/'},
                {src: 'logo.png', dest: 'dist/'},
                {src: 'node_modules/nodejs-websocket', dest: 'dist/node_modules'},
            ],
            verbose: true,
            hook: 'writeBundle'
        }),
        enforce: 'post',
        apply: 'build'
    }],
    server: {
        fs: {
            strict: false
        }
    }
})
