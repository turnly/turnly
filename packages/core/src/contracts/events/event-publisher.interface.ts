/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Event } from './base.event'
import { IEventSubscriber } from './event-subscriber.interface'

/**
 * Interface of application's event managers.
 *
 * @interface IEventPublisher
 * @author Turnly
 */
export interface IEventPublisher<T extends Event = Event> {
  /**
   * Method in charge of running the operations necessary for setting up
   * the concrete aspect of the publisher.
   *
   * @memberof IEventPublisher
   */
  setup(): Promise<void>

  /**
   * Allows to subscribe event subscribers.
   *
   * @memberof IEventBus
   */
  setSubscribers<E extends T = T>(
    subscribers: Map<string, IEventSubscriber<E>[]>
  ): void

  /**
   * Allows publish event subscribers about new events.
   *
   * @memberof IEventPublisher
   */
  publish<E extends T = T>(events: E[]): Promise<void>
}
