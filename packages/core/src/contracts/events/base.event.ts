/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { DateTime } from '@turnly/datetime'

import { EventType } from '../../constants/event-type.enum'
import { formatToSimpleName } from '../../helpers/simple-name.util'

export interface EventPayload extends Record<string, any> {
  organizationId: Guid
}

/**
 * Event
 *
 * @author Turnly
 */
export class Event<P extends EventPayload = EventPayload> {
  private name: string

  /**
   * Creates an instance of Event.
   * @param {T} [payload]
   * @memberof Event
   */
  protected constructor(
    public readonly type: EventType,
    public readonly payload: P,
    name?: string,
    public readonly id: Guid = Identifier.forEvent(),
    public readonly timestamp: number = DateTime.now().toMillis()
  ) {
    this.setName(name)
  }

  protected setName(name?: string): void {
    this.name = formatToSimpleName(name ?? this.constructor.name)

    if (!this.name) {
      throw new Error('Could not set name for event, name is empty')
    }

    if (this.name === 'event')
      throw new Error(
        "You can't call the Event constructor without specifying the event name"
      )
  }

  public getName(): string {
    return this.name
  }

  public static fromObject<P extends EventPayload>(values: {
    type: EventType
    name: string
    payload: P
    id?: Guid
    timestamp?: number
  }): Nullable<Event<P>> {
    const { id, name, payload, timestamp, type } = values

    return name ? new Event(type, payload, name, id, timestamp) : null
  }
}
