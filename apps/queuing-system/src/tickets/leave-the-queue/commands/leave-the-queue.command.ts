/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/core'

export type LeaveTheQueueParams = {
  id: Guid
  organizationId: Guid
  customerId: Guid
}

export class LeaveTheQueueCommand implements ICommand {
  public constructor(public readonly params: LeaveTheQueueParams) {}
}
