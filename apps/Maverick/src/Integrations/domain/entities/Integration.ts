import { AggregateRoot } from '@turnly/core'
import { Guid, Identifier } from '@turnly/shared'

import { IntegrationStatus } from '../enums/IntegrationStatus'
import { IntegrationCreatedEvent } from '../events/IntegrationCreatedEvent'

export interface Attributes {
  id: Guid
  name: string
  status: IntegrationStatus
  origins: string[]
}

export class Integration extends AggregateRoot<Attributes> {
  protected constructor(
    id: Guid,
    private name: string,
    private status: IntegrationStatus,
    private origins: string[]
  ) {
    super(id)
  }

  public static create(attributes: Omit<Attributes, 'id'>): Integration {
    const integration = new Integration(
      Identifier.forIntegration(),
      attributes.name,
      IntegrationStatus.ACTIVE,
      attributes.origins
    )

    integration.register(new IntegrationCreatedEvent(integration.toObject()))

    return integration
  }

  public static build(attributes: Attributes): Integration {
    return new Integration(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.origins
    )
  }

  public toObject(): Attributes {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      origins: this.origins,
    }
  }
}
