import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import { animatedUno } from 'animated-unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: '#edf2ff',
        100: '#dee8ff',
        200: '#c4d4ff',
        300: '#a0b8ff',
        400: '#7088ff',
        500: '#5b6af9',
        600: '#3d40ee',
        700: '#302fd3',
        800: '#292baa',
        900: '#292d86',
        950: '#18184e',
        DEFAULT: '#7088ff',
      },
    },
  },
  shortcuts: [
    ['btn', 'px-1 py-1 rounded inline-block text-primary-600 hover:text-white hover:bg-primary-600 transition border border-current disabled:opacity-50'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    animatedUno(),
    presetRemToPx() as any,
  ],
  transformers: [
    transformerDirectives(),
  ],
})
