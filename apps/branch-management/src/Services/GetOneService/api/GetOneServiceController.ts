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
import { GetOneServiceQuery } from 'Services/GetOneService'
import { Service } from 'Services/Shared/domain/entities/Service'

import { GetOneServiceValidator } from './GetOneServiceValidator'

export class GetOneServiceController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneServiceValidator)
  public async execute(params: GetOneServiceQuery) {
    const service = await this.queryBus.ask<Nullable<Service>>(
      GetOneServiceQuery.build(params)
    )

    if (!service) throw new ResourceNotFoundException()

    return this.respond.ok(service.toObject())
  }
}
