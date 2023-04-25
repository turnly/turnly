/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/core'

export type ReturnTicketToQueueParams = {
  id: Guid
  organizationId: Guid
}

export class ReturnTicketToQueueCommand implements ICommand {
  public constructor(public readonly params: ReturnTicketToQueueParams) {}
}
