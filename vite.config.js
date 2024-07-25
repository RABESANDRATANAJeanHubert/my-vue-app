import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-profile/' : '/',
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**') // provide a path to the folder where you'll store translation data
    })
  ]
});
