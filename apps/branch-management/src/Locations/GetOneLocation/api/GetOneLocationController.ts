/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { GetOneLocationQuery } from 'Locations/GetOneLocation'
import { Location } from 'Locations/Shared/domain/entities/Location'

import { GetOneLocationValidator } from './GetOneLocationValidator'

export class GetOneLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneLocationValidator)
  public async execute(params: GetOneLocationQuery) {
    const location = await this.queryBus.ask<Nullable<Location>>(
      new GetOneLocationQuery(params.id, params.organizationId)
    )

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }
}
