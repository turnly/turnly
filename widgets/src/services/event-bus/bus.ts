import { useMemo } from 'preact/hooks'

import { Event } from './event'
import { EventNames } from './event-names'

type VisibilityPayload = {
  isVisible: boolean
  selector?: string
}

export const $bus = Object.freeze({
  /**
   * Visibility Event
   *
   * @description Fired when the visibility of widget changes state.
   */
  visibility: new Event<VisibilityPayload>(EventNames.VISIBILITY),
})

export const useBus = () => useMemo(() => $bus, [])
