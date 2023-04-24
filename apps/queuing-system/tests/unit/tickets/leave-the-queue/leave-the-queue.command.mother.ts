/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { LeaveTheQueueCommand } from '../../../../src/tickets/leave-the-queue'

export class LeaveTheQueueCommandMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): LeaveTheQueueCommand {
    return new LeaveTheQueueCommand({
      id,
      customerId,
      organizationId,
    })
  }

  static random(): LeaveTheQueueCommand {
    return this.create()
  }
}
