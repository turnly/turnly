import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Integration } from '../entities/Integration'

type Payload = EntityAttributes<Integration>

export class IntegrationCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
