import path from 'path';
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite';
import {readdirSync} from 'fs';

const root = path.resolve('src');
const alias = Object.fromEntries(
    readdirSync(root).map((fn => [fn, path.join(root, fn)]))
)

export default defineConfig({
    plugins: [react()],
    resolve: {alias},
    build: {
        output: {
            sourcemap: true
        }
    }
});
