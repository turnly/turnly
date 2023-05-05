/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { IDevicesWritableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'
import { DeviceStatus } from 'devices/shared/domain/enums/device-status.enum'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'

import { GeneratePairingCodeCommand } from './generate-pairing-code.command'

@CommandHandler(GeneratePairingCodeCommand)
export class GeneratePairingCodeCommandHandler
  implements ICommandHandler<GeneratePairingCodeCommand, Device>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly devicesWritableRepo: IDevicesWritableRepo
  ) {}

  public async execute(command: GeneratePairingCodeCommand) {
    const device = Device.create({
      ...command,
      status: DeviceStatus.UNPAIRED,
      type: DeviceTypes.UNKNOWN,
    })

    await this.devicesWritableRepo.save(device)

    this.eventBus.publish(device.pull())

    return device
  }
}
