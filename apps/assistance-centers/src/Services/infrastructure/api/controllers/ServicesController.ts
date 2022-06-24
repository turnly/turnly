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
  public async get(params: ServiceByIdQuery) {
    const service = await this.queryBus.ask<
      ServiceByIdQuery,
      Nullable<Service>
    >(new ServiceByIdQuery(params.id, params.companyId))

    if (!service) throw new ResourceNotFoundException()

    return this.respond.ok(service.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getServicesByLocation)
  public async getServicesByLocation(params: ServicesByLocationQuery) {
    const services = await this.queryBus.ask<
      ServicesByLocationQuery,
      Nullable<Service[]>
    >(new ServicesByLocationQuery(params.locationId, params.companyId))

    if (!services) throw new ResourceNotFoundException()

    return this.respond.ok(services.map(service => service.toObject()))
  }
}
