import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  ServiceByIdQuery,
  ServiceByLocationIdQuery,
} from 'Services/application/queries'
import { Service } from 'Services/domain/entities/Service'
import {
  GetServiceByLocationPayload,
  GetServicePayload,
} from 'Services/domain/payloads'

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
  @InputValidator(validator.getServiceByLocationId)
  public async getByLocationId(params: GetServiceByLocationPayload) {
    const service = await this.queryBus.ask<
      ServiceByLocationIdQuery,
      Nullable<Service>
    >(new ServiceByLocationIdQuery(params))

    if (!service) throw new ResourceNotFoundException()

    return this.respond.ok(service.toObject())
  }
}
