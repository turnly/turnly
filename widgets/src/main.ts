import { Widget } from './Widget'

window.$turnly = new Widget()

document.addEventListener('DOMContentLoaded', () => window.$turnly.mount())
