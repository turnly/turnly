/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'
import { IsArray } from 'class-validator'

import { OrganizationQuery } from './with-organization.query'

/**
 * With extra query
 *
 * @description Extend this to create queries that have extra data
 */
export abstract class WithExtraQuery extends OrganizationQuery {
  @IsArray({
    message: 'Oops! The extra data is an array, but was not provided.',
  })
  public readonly extra: Extra[] = []
}
