/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { AnnounceMyArrivalCommand } from '../../../../src/tickets/announce-my-arrival'

export class AnnounceMyArrivalCommandMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): AnnounceMyArrivalCommand {
    return AnnounceMyArrivalCommand.build({
      id,
      customerId,
      organizationId,
    })
  }

  static random(): AnnounceMyArrivalCommand {
    return this.create()
  }
}
