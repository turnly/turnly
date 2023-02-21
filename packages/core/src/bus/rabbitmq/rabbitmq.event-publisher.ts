/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Connection, Exchange, Message, Queue } from 'amqp-ts'

import { Event } from '../../contracts/events/base.event'
import { IEventPublisher } from '../../contracts/events/event-publisher.interface'
import { IEventSubscriber } from '../../contracts/events/event-subscriber.interface'
import { LISTEN_TO_ALL_EVENTS } from '../base.event-bus.config'
import { rabbitMQConfig } from './rabbitmq.config'
import { RabbitMQMessage } from './rabbitmq.message'

export class RabbitMQEventPublisher<CEvent extends Event = Event>
  implements IEventPublisher<CEvent>
{
  private readonly exchange: Exchange
  private readonly queue: Queue
  private subscribers: Map<string, IEventSubscriber<CEvent>[]>
  private readonly connection: Connection = new Connection(rabbitMQConfig.uri)

  public constructor() {
    this.exchange = this.connection.declareExchange(
      rabbitMQConfig.exchange,
      'fanout',
      {
        durable: false,
      }
    )

    this.queue = this.connection.declareQueue(rabbitMQConfig.queue)
  }

  public async setup(): Promise<void> {
    await this.queue.bind(this.exchange)
    await this.connection.completeConfiguration()

    await this.onMessage()
  }

  public async publish(events: Event[]): Promise<void> {
    await Promise.all(
      events.map(event =>
        this.exchange.send(new Message({ data: this.buildMessage(event) }))
      )
    )
  }

  public setSubscribers<E extends CEvent = CEvent>(
    subscribers: Map<string, IEventSubscriber<E>[]>
  ) {
    this.subscribers = subscribers
  }

  private async onMessage() {
    await this.queue.activateConsumer(
      async (message: Message) => {
        const event = this.messageToEvent(message) as CEvent

        if (event) {
          await Promise.all(
            this.getSubscribers(event.getName()).map(subscriber =>
              subscriber.execute(event)
            )
          )
        }

        message.ack()
      },
      { noAck: false }
    )
  }

  private getSubscribers(name: string): IEventSubscriber<CEvent>[] {
    const subscribers = this.subscribers.get(name)
    const subscribeToAll = this.subscribers.get(LISTEN_TO_ALL_EVENTS)

    return (subscribeToAll || []).concat(subscribers || [])
  }

  private buildMessage(event: Event): RabbitMQMessage {
    return {
      type: event.getName(),
      id: event.id,
      eventType: event.type,
      payload: event.payload,
      timestamp: event.timestamp,
    }
  }

  private messageToEvent(message: Message) {
    const data: RabbitMQMessage = JSON.parse(message.content.toString())?.data

    if (!data) return null

    const { type: name, eventType: type } = data

    return Event.fromObject({ ...data, type, name })
  }
}
