import { defineConfig, UserConfig, ConfigEnv } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/live2d-preview/',
  build: {
    outDir: 'docs'
  }
});
