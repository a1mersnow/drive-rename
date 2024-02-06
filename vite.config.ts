import path from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Monkey, { cdn, util } from 'vite-plugin-monkey'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        util.unimportPreset,
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    Monkey({
      entry: './src/main.ts',
      userscript: {
        grant: 'none',
        match: [
          'https://www.aliyundrive.com/*',
          'https://www.alipan.com/*',
          'https://pan.quark.cn/*',
        ],
        license: 'GPL',
        name: '云盘批量重命名',
        description: '批量重命名云盘里的文件，支持阿里云盘、夸克云盘',
        icon: 'data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 32 32\' width=\'1.2em\' height=\'1.2em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'%235b6af9\' d=\'M19 23h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z\'/%3E%3Cpath fill=\'%235b6af9\' d=\'M16 4c-4.3 0-7.9 3-8.8 7.1c-3 .6-5.2 3.3-5.2 6.4C2 21.1 4.9 24 8.5 24H16v-2H8.5C6 22 4 20 4 17.5c0-2.3 1.8-4.3 4.1-4.5H9l.1-.8C9.5 8.6 12.5 6 16 6c3.9 0 7 3.1 7 7h2c0-5-4-9-9-9\'/%3E%3C/svg%3E',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
