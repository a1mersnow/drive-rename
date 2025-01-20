import { createPinia } from 'pinia'
import { createApp } from 'vue'
import AppRoot from './App.vue'
import { getContainer, setRequestHeader } from './utils/provider'

import './styles/tailwind-reset.css'
import './styles/main.css'
import 'uno.css'

const ENTRY_ID = 'a1mersnow_webdrive_rename'
const ENTRY_CLASS = 'drive-rename-root'

// intercept all XHR requests
const oldSetHeader = XMLHttpRequest.prototype.setRequestHeader
XMLHttpRequest.prototype.setRequestHeader = function (key: string, value: string) {
  setRequestHeader(key, value)
  oldSetHeader.apply(this, [key, value])
}

window.setInterval(() => {
  const { el, front, style } = getContainer()
  if (el)
    init(el, front, style)
}, 300)

function init(parentEl: Element, front: boolean, style: string) {
  if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
    const app = createApp(AppRoot)
    const pinia = createPinia()
    app.use(pinia)
    app.mount(
      (() => {
        if (parentEl && parentEl instanceof HTMLElement)
          parentEl.style.cssText = parentEl.style.cssText + style
        const appRoot = document.createElement('div')
        appRoot.style.cssText = 'display: inline-block;'
        appRoot.setAttribute('id', ENTRY_ID)
        appRoot.classList.add(ENTRY_CLASS)
        if (front)
          parentEl.insertBefore(appRoot, parentEl.firstElementChild)
        else
          parentEl.append(appRoot)

        return appRoot
      })(),
    )
  }
}
