import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppRoot from './App.vue'
import { setSignature } from './utils/aliyun'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const ENTRY_ID = 'a1mersnow_aliyundrive_rename'

const oldSetHeader = XMLHttpRequest.prototype.setRequestHeader

XMLHttpRequest.prototype.setRequestHeader = function (...args) {
  if (args[0] && typeof args[0] === 'string' && args[0].toLocaleLowerCase() === 'x-signature' && args[1])
    setSignature(args[1])

  oldSetHeader.apply(this, args)
}

window.setInterval(() => {
  const found = document.querySelector('[class^="nav-tab-content--"]')
  if (found)
    init(found)
}, 300)

function init(parentEl: Element) {
  if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
    const app = createApp(AppRoot)
    const pinia = createPinia()
    app.use(pinia)
    app.mount(
      (() => {
        const app = document.createElement('div')
        app.setAttribute('id', ENTRY_ID)
        parentEl.append(app)
        return app
      })(),
    )
  }
}
