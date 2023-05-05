/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IFeaturesReadableRepo } from 'features/shared/domain/contracts/features-repo.interface'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { ListFeaturesQuery } from './list-features.query'

@QueryHandler(ListFeaturesQuery)
export class ListFeaturesQueryHandler
  implements IQueryHandler<ListFeaturesQuery, Nullable<Feature[]>>
{
  public constructor(
    private readonly featuresReadableRepo: IFeaturesReadableRepo
  ) {}

  public async execute({ limit, offset }: ListFeaturesQuery) {
    const query = new QueryBuilder<Feature>().getMany(offset, limit)

    return await this.featuresReadableRepo.find(query)
  }
}
