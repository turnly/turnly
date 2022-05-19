import { AggregateRoot } from '@turnly/core'
import { Guid } from '@turnly/shared'

import { IntegrationStatus } from '../enums/IntegrationStatus'

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

  public static create({
    status = IntegrationStatus.ACTIVE,
    ...attributes
  }: Attributes): Integration {
    return new Integration(
      attributes.id,
      attributes.name,
      status,
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
