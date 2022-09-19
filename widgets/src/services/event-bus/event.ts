import type { EventCallback } from '../../@types/shared'
import { EventBus } from './event-bus'
import type { EventNames } from './event-names'

/**
 * Event
 *
 * @description An abstraction for dispatch events from the widget to DOM.
 *
 * @author Turnly
 */
export class Event<P extends Record<string, any>> {
  public constructor(private readonly name: EventNames) {}

  /**
   * Dispatch event
   *
   * @description Trigger the event using the event bus from the current
   * context and accept a payload of the inherited type.
   */
  dispatch(payload?: P) {
    EventBus.dispatch<P>(this.name, payload)
  }

  /**
   * Subscribe method
   *
   * @returns {Function} A function that removes the event listener in target's event
   * listener list with the same type, callback, and options.
   */
  subscribe(cb: EventCallback<P>): Function {
    EventBus.subscribe<P>(this.name, cb)

    return () => EventBus.unsubscribe<P>(this.name, cb)
  }
}
