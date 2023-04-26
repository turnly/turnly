/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrganizationQuery } from '@turnly/core'

export class SearchAvailableLocationsForServingQuery extends OrganizationQuery {
  public readonly searchQuery?: string
  public readonly country?: string
  public readonly limit?: number
  public readonly offset?: number
  public readonly latitude?: number
  public readonly longitude?: number
}
