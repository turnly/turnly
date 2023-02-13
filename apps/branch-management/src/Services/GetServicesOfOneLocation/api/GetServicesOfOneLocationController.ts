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
import { GetServicesOfOneLocationQuery } from 'Services/GetServicesOfOneLocation'
import { Service } from 'Services/Shared/domain/entities/Service'

import { GetServicesOfOneLocationValidator } from './GetServicesOfOneLocationValidator'

export class GetServicesOfOneLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetServicesOfOneLocationValidator)
  public async execute(params: GetServicesOfOneLocationQuery) {
    const services = await this.queryBus.ask<Nullable<Service[]>>(
      new GetServicesOfOneLocationQuery(
        params.locationId,
        params.organizationId
      )
    )

    if (!services?.length) throw new ResourceNotFoundException()

    return this.respond.ok(services.map(service => service.toObject()))
  }
}
