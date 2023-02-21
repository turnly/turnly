/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationQuery } from '@turnly/shared'

export class GetOneCustomerQuery extends OrganizationQuery {
  public readonly id: Guid
}
