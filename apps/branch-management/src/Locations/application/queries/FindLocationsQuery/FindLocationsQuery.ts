/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import type { Guid } from '@turnly/common'
import type { IQuery } from '@turnly/shared'

export class FindLocationsQuery implements IQuery {
  public constructor(
    public readonly organizationId: Guid,
    public readonly searchQuery?: string,
    public readonly country?: string,
    public readonly limit?: number,
    public readonly offset?: number,
    public readonly latitude?: number,
    public readonly longitude?: number
  ) {}
}
