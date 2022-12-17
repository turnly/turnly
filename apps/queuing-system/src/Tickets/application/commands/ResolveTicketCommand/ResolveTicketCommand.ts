/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export type ResolveTicketParams = {
  id: Guid
  status: TicketStatus
  organizationId: Guid
}

export class ResolveTicketCommand implements ICommand {
  public constructor(public readonly params: ResolveTicketParams) {}
}
