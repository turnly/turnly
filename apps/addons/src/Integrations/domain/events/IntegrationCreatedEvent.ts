import { DomainEvent, EntityAttributes } from '@turnly/shared'

import { Integration } from '../entities/Integration'

type Payload = EntityAttributes<Integration>

export class IntegrationCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
