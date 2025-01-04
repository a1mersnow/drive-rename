import fs from 'node:fs'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Monkey, { cdn, util } from 'vite-plugin-monkey'
import { defineConfig } from 'vitest/config'

interface StaticProvider {
  DRIVE_NAME: string
  HOSTS: string[]
}

const providers: StaticProvider[] = getStaticProviders()

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

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
        match: providers.flatMap(p => p.HOSTS.map(h => `https://${h}/*`)),
        license: 'GPL',
        name: '云盘批量重命名',
        description: `批量重命名云盘里的文件，支持${providers.map(p => p.DRIVE_NAME).join('、')}`,
        icon: 'data:image/jpeg;base64,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',
      },
      build: {
        externalGlobals: {
          'vue': cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
          'js-md5': cdn.jsdelivr('md5', 'build/md5.min.js'),
          'dayjs': cdn.jsdelivr('dayjs', 'dayjs.min.js'),
        },
      },
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})

function getStaticProviders() {
  const providers: StaticProvider[] = []
  const files = fs.readdirSync(path.resolve(__dirname, 'src/providers'))
  for (const file of files) {
    if (file.endsWith('.ts')) {
      const raw = fs.readFileSync(path.resolve(__dirname, 'src/providers', file), 'utf-8')
      const nameMatch = raw.match(/DRIVE_NAME: '(.+)'/)
      if (!nameMatch)
        throw new Error('no DRIVE_NAME found')
      const hostMatch = raw.match(/HOSTS: (\['.+?\])/)
      if (!hostMatch)
        throw new Error('no HOSTS found')

      providers.push({
        DRIVE_NAME: nameMatch[1],
        HOSTS: JSON.parse(hostMatch[1].replace(/'/g, '"')),
      })
    }
  }
  return providers
}
