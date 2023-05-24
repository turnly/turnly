import { Event } from '../contracts/events/base.event'
import { IEventPublisher } from '../contracts/events/event-publisher.interface'
import { IEventSubscriber } from '../contracts/events/event-subscriber.interface'
import { LISTEN_TO_ALL_EVENTS } from './base.event-bus.config'

/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class InMemoryEventPublisher<CEvent extends Event = Event>
  implements IEventPublisher<CEvent>
{
  private subscribers: Map<string, IEventSubscriber<CEvent>[]> = new Map()

  public async setup(): Promise<void> {
    /**
     * No setup required for in-memory event publisher.
     */
  }

  public async publish<E extends CEvent = CEvent>(events: E[]): Promise<void> {
    for (const event of events) {
      const subscribers = this.getSubscribers(event.getName())

      await Promise.all(
        subscribers.map(subscriber => subscriber.execute(event))
      )
    }
  }

  public setSubscribers<E extends CEvent = CEvent>(
    subscribers: Map<string, IEventSubscriber<E>[]>
  ) {
    this.subscribers = subscribers
  }

  private getSubscribers(name: string): IEventSubscriber<CEvent>[] {
    const subscribers = this.subscribers.get(name)
    const subscribeToAll = this.subscribers.get(LISTEN_TO_ALL_EVENTS)

    return (subscribeToAll || []).concat(subscribers || [])
  }
}
