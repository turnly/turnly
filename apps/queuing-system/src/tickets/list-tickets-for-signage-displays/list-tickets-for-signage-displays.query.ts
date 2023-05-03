/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrderTypes, OrganizationQuery } from '@turnly/core'

export enum ClearTicketsAfter {
  CALLING = 'calling',
  SERVING = 'serving',
}

export class ListTicketsForSignageDisplaysQuery extends OrganizationQuery {
  public readonly locationId: Guid
  public readonly serviceIds?: Guid[]
  public readonly clearTicketsAfter: ClearTicketsAfter
  public readonly limit?: number
  public readonly offset?: number
  public readonly order?: OrderTypes
}
