import type { EventName } from '../../services/event-bus'
import type { Widget } from '../../Widget'
import { About, Appearance, General } from '../settings'

declare global {
  interface Window {
    __TURNLY_WIDGET_LOADED__?: boolean
    $turnly: Widget
    turnlySettings?: {
      general?: Partial<General>
      appearance?: Partial<Appearance>
      about?: Partial<About>
    }
  }

  interface WindowEventMap extends Record<EventName, CustomEvent> {}
}
