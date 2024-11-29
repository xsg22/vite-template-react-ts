import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { readdirSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const root = path.resolve('src');
const alias = Object.fromEntries(
    readdirSync(root).map((fn => [fn, path.join(root, fn)]))
)

export default defineConfig({
    plugins: [
        legacy({
            polyfills: true,
            modernPolyfills: true,
        }),
        react(),
    ],
    resolve: {alias},
    build: {
        output: {
            sourcemap: true
        }
    }
});
