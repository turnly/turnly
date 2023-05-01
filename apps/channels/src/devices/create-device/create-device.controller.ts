/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/core'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { CreateDeviceCommand } from './create-device.command'
import { CreateDeviceValidator } from './create-device.validator'

export class CreateDeviceController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateDeviceValidator)
  public async execute(params: CreateDeviceCommand) {
    const device = await this.commandBus.execute<Device, CreateDeviceCommand>(
      CreateDeviceCommand.build(params)
    )

    return this.respond.created(device.toObject())
  }
}
