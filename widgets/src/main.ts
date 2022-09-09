import { Script } from './services/script'
import { Widget } from './Widget'

const { widgetId, url } = Script.getDataFromScript()

const widget = new Widget({ widgetId, url })

document.addEventListener('DOMContentLoaded', () => widget.mount())
