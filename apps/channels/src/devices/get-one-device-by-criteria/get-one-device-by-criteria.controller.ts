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
import { Device } from 'devices/shared/domain/entities/device.entity'

import { GetOneDeviceByCriteriaQuery } from './get-one-device-by-criteria.query'
import { GetOneDeviceByCriteriaValidator } from './get-one-device-by-criteria.validator'

export class GetOneDeviceByCriteriaController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneDeviceByCriteriaValidator)
  public async execute(query: GetOneDeviceByCriteriaQuery) {
    const device = await this.queryBus.ask<Nullable<Device>>(
      GetOneDeviceByCriteriaQuery.build(query)
    )

    if (!device) throw new ResourceNotFoundException()

    return this.respond.ok(device.toObject())
  }
}
