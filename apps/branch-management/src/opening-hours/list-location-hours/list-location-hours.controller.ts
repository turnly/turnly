/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { ListLocationHoursQuery } from 'opening-hours/list-location-hours'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { ListLocationHoursValidator } from './list-location-hours.validator'

export class ListLocationHoursController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }
  @TimeoutHandler()
  @InputValidator(ListLocationHoursValidator)
  public async execute(params: ListLocationHoursQuery) {
    const openingHours = await this.queryBus.ask<Nullable<OpeningHour[]>>(
      ListLocationHoursQuery.build(params)
    )

    if (!openingHours?.length) throw new ResourceNotFoundException()

    return this.respond.ok(openingHours.map(service => service.toObject()))
  }
}
