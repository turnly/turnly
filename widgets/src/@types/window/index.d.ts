import type { EventName } from '../../services/event-bus'
import type { Widget } from '../../Widget'
import { Settings } from '../settings'

declare global {
  interface Window {
    __TURNLY_WIDGET_LOADED__?: boolean
    $tly: Widget
    $tlySettings?: Partial<Settings>
  }

  interface WindowEventMap extends Record<EventName, CustomEvent> {}
}
