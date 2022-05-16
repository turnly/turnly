import { AggregateRoot } from '@turnly/core'
import { Uuid } from '@turnly/shared'

import { IntegrationStatus } from '../enums/IntegrationStatus'

interface Attributes {
  id: Uuid
  name: string
  status: IntegrationStatus
  origins: string[]
}

export class Integration extends AggregateRoot implements Attributes {
  protected constructor(
    id: Uuid,
    public name: string,
    public status: IntegrationStatus,
    public origins: string[]
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
}
