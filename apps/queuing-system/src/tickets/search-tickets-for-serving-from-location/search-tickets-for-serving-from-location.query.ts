/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationQuery } from '@turnly/core'
import { TicketStatus } from 'tickets/shared/domain/enums/TicketStatus'

export enum SearchTicketsForServingFromLocationFilters {
  WAITING = 'waiting',
  DISCARDED = 'discarded',
}

export type SearchTicketsForServingFromLocationParams = {
  readonly locationId: Guid
  readonly organizationId: Guid
  readonly status?: SearchTicketsForServingFromLocationFilters
  readonly searchQuery?: string
  readonly serviceIds?: Guid[]
}

export class SearchTicketsForServingFromLocationQuery extends OrganizationQuery {
  public readonly locationId: Guid
  public readonly status?: TicketStatus[]
  public readonly searchQuery?: string
  public readonly serviceIds?: Guid[]
}
