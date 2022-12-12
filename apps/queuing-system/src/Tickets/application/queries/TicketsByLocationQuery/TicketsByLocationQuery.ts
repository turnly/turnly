/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export enum TicketsByLocationFilters {
  WAITING = 'waiting',
  DISCARDED = 'discarded',
}

export type TicketsByLocationParams = {
  readonly locationId: Guid
  readonly organizationId: Guid
  readonly status?: TicketsByLocationFilters
  readonly searchQuery?: string
  readonly serviceIds?: Guid[]
}

export class TicketsByLocationQuery implements IQuery {
  public constructor(
    public readonly locationId: Guid,
    public readonly organizationId: Guid,
    public readonly status?: TicketStatus[],
    public readonly searchQuery?: string,
    public readonly serviceIds?: Guid[]
  ) {}
}
