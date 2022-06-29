import { Guid } from '@turnly/common'
import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Organization } from '../entities/Organization'

type Payload = EntityAttributes<Organization> & { organizationId: Guid }

export class OrganizationCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
