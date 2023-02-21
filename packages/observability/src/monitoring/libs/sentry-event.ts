/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Event } from '@sentry/node'

/**
 * Sentry handler
 *
 * @description Abstraction to handle sentry events.
 *
 * @author Turnly
 */
export class SentryEvent {
  private constructor(private event: Event) {
    this.cleanRequest()
  }

  private cleanRequest() {
    delete this.event.request?.cookies
    delete this.event.request?.data
  }

  /**
   * Get an instance of the SentryEvent and process events
   *
   * @memberof SentryEvent
   */
  public static handle(e: Event): Event {
    const { event } = new SentryEvent(e)

    return event
  }
}
