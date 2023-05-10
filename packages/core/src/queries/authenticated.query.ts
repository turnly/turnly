/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Memberships } from '@turnly/tenancy'
import { IsObject } from 'class-validator'

import { Query } from './base.query'

/**
 * Authenticated Query
 *
 * @description Extend this to create commands that require authentication
 */
export abstract class AuthenticatedQuery extends Query {
  /**
   * The Memberships
   *
   * @description The memberships of the authenticated user
   */
  @IsObject({
    message:
      'Oops! The memberships of the authenticated user are required to perform this action.',
  })
  public readonly memberships: Memberships
}
