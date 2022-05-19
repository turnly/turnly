import { DomainEvent } from '@turnly/core'

import { Integration } from '../entities/Integration'

export class IntegrationCreatedEvent extends DomainEvent<Integration> {
  public constructor(payload: Integration) {
    super(undefined, payload)
  }
}
