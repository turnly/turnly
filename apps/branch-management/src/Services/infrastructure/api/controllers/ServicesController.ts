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
import { ServiceByIdQuery } from 'Services/application/queries/ServiceByIdQuery'
import { ServicesByLocationQuery } from 'Services/application/queries/ServicesByLocationQuery'
import { Service } from 'Services/domain/entities/Service'

import { validator } from '../validators/ServicesValidator'

export class ServicesController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: ServiceByIdQuery) {
    const service = await this.queryBus.ask<Nullable<Service>>(
      new ServiceByIdQuery(params.id, params.organizationId)
    )

    if (!service) throw new ResourceNotFoundException()

    return this.respond.ok(service.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getServicesByLocation)
  public async getServicesByLocation(params: ServicesByLocationQuery) {
    const services = await this.queryBus.ask<Nullable<Service[]>>(
      new ServicesByLocationQuery(params.locationId, params.organizationId)
    )

    if (!services?.length) throw new ResourceNotFoundException()

    return this.respond.ok(services.map(service => service.toObject()))
  }
}
