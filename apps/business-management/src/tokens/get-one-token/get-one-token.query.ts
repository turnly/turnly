/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrganizationQuery } from '@turnly/core'

export class GetOneTokenQuery extends OrganizationQuery {
  public readonly secret: string
}
