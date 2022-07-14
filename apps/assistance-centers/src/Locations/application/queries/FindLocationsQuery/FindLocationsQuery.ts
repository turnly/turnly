/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */

import type { Guid } from '@turnly/common'
import type { IQuery } from '@turnly/shared'

export class FindLocationsQuery implements IQuery {
  public constructor(
    public readonly searchQuery: string,
    public readonly country: string,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly limit: number,
    public readonly offset: number,
    public readonly organizationId: Guid
  ) {}
}
