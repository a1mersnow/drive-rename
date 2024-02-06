import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppRoot from './App.vue'
import { getContainer, setRequestHeader } from './utils/provider'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const ENTRY_ID = 'a1mersnow_webdrive_rename'

const oldSetHeader = XMLHttpRequest.prototype.setRequestHeader

XMLHttpRequest.prototype.setRequestHeader = function (key: string, value: string) {
  setRequestHeader(key, value)

  oldSetHeader.apply(this, [key, value])
}

window.setInterval(() => {
  const { el, front } = getContainer()
  if (el)
    init(el, front)
}, 300)

function init(parentEl: Element, front: boolean) {
  if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
    const app = createApp(AppRoot)
    const pinia = createPinia()
    app.use(pinia)
    app.mount(
      (() => {
        const appRoot = document.createElement('div')
        appRoot.setAttribute('id', ENTRY_ID)
        if (front)
          parentEl.insertBefore(appRoot, parentEl.firstElementChild)
        else
          parentEl.append(appRoot)

        return appRoot
      })(),
    )
  }
}
