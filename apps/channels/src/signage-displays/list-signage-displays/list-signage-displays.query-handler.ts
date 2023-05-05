/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { ISignageDisplaysReadableRepo } from 'signage-displays/shared/domain/contratcs/signage-displays-repo.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import { ListSignageDisplaysQuery } from './list-signage-displays.query'

@QueryHandler(ListSignageDisplaysQuery)
export class ListSignageDisplaysQueryHandler
  implements
    IQueryHandler<ListSignageDisplaysQuery, Nullable<SignageDisplay[]>>
{
  public constructor(
    private readonly signageDisplaysReadableRepo: ISignageDisplaysReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
    limit,
    offset,
  }: ListSignageDisplaysQuery) {
    const query = new QueryBuilder<SignageDisplay>()
      .equal('locationId', locationId)
      .equal('organizationId', organizationId)
      .getMany(offset, limit)

    return await this.signageDisplaysReadableRepo.find(query)
  }
}
