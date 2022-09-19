import { useMemo } from 'preact/hooks'

import { Event } from './event'
import { EventNames } from './event-names'

export const $bus = Object.freeze({
  /**
   * Ready Event
   *
   * @description Fired when the widget is ready.
   */
  ready: new Event(EventNames.READY),

  /**
   * Visibility Event
   *
   * @description Fired when the visibility of widget changes state.
   */
  visibility: new Event<{ isVisible: boolean }>(EventNames.VISIBILITY),
})

export const useBus = () => useMemo(() => $bus, [])
