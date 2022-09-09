import type { EventName } from '../../services/event-bus'
import type { Settings, Widget } from '../../Widget'

declare global {
  interface Window {
    __TURNLY_WIDGET_LOADED__?: boolean
    $tly: Widget
    tlySettings: Settings
  }

  interface WindowEventMap extends Record<EventName, CustomEvent> {}
}
