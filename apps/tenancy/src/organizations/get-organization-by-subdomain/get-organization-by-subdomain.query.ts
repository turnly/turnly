/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Query } from '@turnly/core'

export class GetOrganizationBySubdomainQuery extends Query {
  public readonly subdomain: string
}
