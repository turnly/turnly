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
import { GetOneServiceQuery } from 'services/get-one-service'
import { Service } from 'services/shared/domain/entities/service.entity'

import { GetOneServiceValidator } from './get-one-service.validator'

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
