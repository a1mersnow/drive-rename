import { createApp } from 'vue'
import AppRoot from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const ENTRY_ID = 'aliyundrive_rename_a1mersnow'

window.setInterval(() => {
  const found = document.querySelector('[class^="nav-tab-content--"]')
  if (found)
    init(found)
}, 300)

function init(parentEl: Element) {
  if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
    const app = createApp(AppRoot)
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
