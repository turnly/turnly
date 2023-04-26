/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { EntityAttributes, Event, EventType } from '@turnly/core'

import { Organization } from '../shared/domain/entities/organization.entity'

type Payload = EntityAttributes<Organization> & { organizationId: Guid }

export class OrganizationCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
