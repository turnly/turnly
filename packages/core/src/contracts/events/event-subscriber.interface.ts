/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Event } from './base.event'

/**
 * Interface of the event subscribers in the application.
 *
 * @interface IEventSubscriber
 * @author Turnly
 */
export abstract class IEventSubscriber<T extends Event = Event> {
  /**
   * Callback that handles the event.
   *
   * @param {E} event
   * @return {*} {Promise<void>}
   * @memberof IEventSubscriber
   */
  abstract execute(event: T): Promise<void>
}
