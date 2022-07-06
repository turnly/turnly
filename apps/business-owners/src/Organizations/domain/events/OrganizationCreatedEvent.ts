/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Organization } from '../entities/Organization'

type Payload = EntityAttributes<Organization> & { organizationId: Guid }

export class OrganizationCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
