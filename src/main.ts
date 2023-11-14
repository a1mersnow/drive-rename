import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

let timer: number
Promise.race([
  new Promise((resolve) => {
    timer = window.setInterval(() => {
      const found = document.querySelector('[class^="nav-tab-content--"]')
      if (found)
        resolve(true)
    }, 100)
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 10000)
  }),
]).then(() => {
  init()
})

function init() {
  clearInterval(timer)
  const app = createApp(App)
  app.mount(
    (() => {
      const app = document.createElement('div')
      document.elementFromPoint(0, 0)?.append(app)
      return app
    })(),
  )
}
