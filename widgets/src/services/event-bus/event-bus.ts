import type { EventCallback } from '../../@types/shared'
import type { EventNames } from './event-names'

export class EventBus {
  private static readonly $target: Window = window

  public static dispatch<P>(event: EventNames, detail?: P) {
    this.$target.dispatchEvent(new CustomEvent(event, { detail }))
  }

  public static subscribe<P>(event: EventNames, cb: EventCallback<P>) {
    this.$target.addEventListener(event, cb)
  }

  public static unsubscribe<P>(event: EventNames, cb: EventCallback<P>) {
    this.$target.removeEventListener(event, cb)
  }
}
