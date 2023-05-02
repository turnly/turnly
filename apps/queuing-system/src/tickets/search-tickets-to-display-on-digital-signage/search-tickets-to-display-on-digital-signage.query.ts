/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrderTypes, OrganizationQuery } from '@turnly/core'

export class SearchTicketsToDisplayOnDigitalSignageQuery extends OrganizationQuery {
  public readonly locationId: Guid
  public readonly serviceIds?: Guid[]
  public readonly afterCalled?: boolean
  public readonly limit?: number
  public readonly offset?: number
  public readonly order?: OrderTypes
}
