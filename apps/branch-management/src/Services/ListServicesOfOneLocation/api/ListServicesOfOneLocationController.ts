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
import { ListServicesOfOneLocationQuery } from 'Services/ListServicesOfOneLocation'
import { Service } from 'Services/Shared/domain/entities/Service'

import { ListServicesOfOneLocationValidator } from './ListServicesOfOneLocationValidator'

export class ListServicesOfOneLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ListServicesOfOneLocationValidator)
  public async execute(params: ListServicesOfOneLocationQuery) {
    const services = await this.queryBus.ask<Nullable<Service[]>>(
      ListServicesOfOneLocationQuery.build(params)
    )

    if (!services?.length) throw new ResourceNotFoundException()

    return this.respond.ok(services.map(service => service.toObject()))
  }
}
