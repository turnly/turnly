/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { IDevicesWritableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { CreateDeviceCommand } from './create-device.command'

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceCommandHandler
  implements ICommandHandler<CreateDeviceCommand, Device>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly devicesWritableRepo: IDevicesWritableRepo
  ) {}

  public async execute(command: CreateDeviceCommand) {
    const device = Device.create(command)

    await this.devicesWritableRepo.save(device)

    this.eventBus.publish(device.pull())

    return device
  }
}
