import { Widget } from './Widget'

window.$tlySettings = {
  locale: 'en',
}

const widget = new Widget()

document.addEventListener('DOMContentLoaded', () => widget.mount())
