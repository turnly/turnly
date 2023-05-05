/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { ListFeaturesQuery } from './list-features.query'
import { ListFeaturesValidator } from './list-features.validator'

export class ListFeaturesController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }
  @TimeoutHandler()
  @InputValidator(ListFeaturesValidator)
  public async execute(params: ListFeaturesQuery) {
    const features = await this.queryBus.ask<Feature[]>(
      ListFeaturesQuery.build(params)
    )

    if (!features?.length) throw new ResourceNotFoundException()

    return this.respond.ok(features.map(service => service.toObject()))
  }
}
