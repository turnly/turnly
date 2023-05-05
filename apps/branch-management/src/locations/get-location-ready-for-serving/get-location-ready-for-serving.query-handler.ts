/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryBus, IQueryHandler, QueryHandler } from '@turnly/core'
import {
  InvalidStateException,
  ResourceNotFoundException,
} from '@turnly/observability'
import { GetOneLocationQuery } from 'locations/get-one-location'
import { Location } from 'locations/shared/domain/entities/location.entity'

import { GetLocationReadyForServingQuery } from './get-location-ready-for-serving.query'

@QueryHandler(GetLocationReadyForServingQuery)
export class GetLocationReadyForServingQueryHandler
  implements IQueryHandler<GetLocationReadyForServingQuery, Nullable<Location>>
{
  public constructor(private readonly queryBus: IQueryBus) {}

  public async execute({
    id,
    organizationId,
  }: GetLocationReadyForServingQuery) {
    const location = await this.queryBus.ask<Location, GetOneLocationQuery>({
      id,
      organizationId,
    })

    if (!location) throw new ResourceNotFoundException()

    if (!location.isInValidStatus())
      throw new InvalidStateException(
        'Oops, you are trying to get a location that is not ready for serving'
      )

    if (!location.isOpen())
      throw new InvalidStateException(
        'Oops, you are trying to get a location that is closed'
      )

    return location
  }
}
