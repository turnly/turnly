import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { ServiceByIdQuery } from 'Services/application/queries/ServiceByIdQuery'
import {
  ServicesByLocationParams,
  ServicesByLocationQuery,
} from 'Services/application/queries/ServicesByLocationQuery'
import { Service } from 'Services/domain/entities/Service'
import { GetServicePayload } from 'Services/domain/payloads'

import { validator } from '../validators/ServiceValidator'

export class ServicesController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetServicePayload) {
    const service = await this.queryBus.ask<
      ServiceByIdQuery,
      Nullable<Service>
    >(new ServiceByIdQuery(params))

    if (!service) throw new ResourceNotFoundException()

    return this.respond.ok(service.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getServicesByLocation)
  public async getServicesByLocation(params: ServicesByLocationParams) {
    const services = await this.queryBus.ask<
      ServicesByLocationQuery,
      Nullable<Service[]>
    >(new ServicesByLocationQuery(params))

    if (!services) throw new ResourceNotFoundException()

    return this.respond.ok(services.map(service => service.toObject()))
  }
}
