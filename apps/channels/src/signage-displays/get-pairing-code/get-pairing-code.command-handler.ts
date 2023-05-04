/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CommandHandler,
  ICommandBus,
  ICommandHandler,
  IEventBus,
} from '@turnly/core'
import { CreateDeviceCommand } from 'devices/create-device'
import { Device } from 'devices/shared/domain/entities/device.entity'
import { DeviceStatus } from 'devices/shared/domain/enums/device-status.enum'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'
import { ISignageDisplaysWritableRepo } from 'signage-displays/shared/domain/contratcs/signage-displays-repo.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'
import { ClearTicketsAfter } from 'signage-displays/shared/domain/enums'

import { GetPairingCodeCommand } from './get-pairing-code.command'

@CommandHandler(GetPairingCodeCommand)
export class GetPairingCodeCommandHandler
  implements
    ICommandHandler<
      GetPairingCodeCommand,
      { signageDisplay: SignageDisplay; device: Device }
    >
{
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly eventBus: IEventBus,
    private readonly signageDisplaysWritableRepo: ISignageDisplaysWritableRepo
  ) {}

  public async execute(command: GetPairingCodeCommand) {
    const params = {
      name: command.name,
      status: DeviceStatus.UNPAIRED,
      type: DeviceTypes.DIGITAL_SIGNAGE,
      organizationId: command.organizationId,
    }
    const device = await this.commandBus.execute<Device, CreateDeviceCommand>(
      CreateDeviceCommand.build(params)
    )

    const signageDisplay = SignageDisplay.create({
      deviceId: device.toObject().id,
      clearTicketsAfter: ClearTicketsAfter.AFTER_SERVING,
      ...command,
    })

    await this.signageDisplaysWritableRepo.save(signageDisplay)

    this.eventBus.publish(signageDisplay.pull())

    return { signageDisplay, device }
  }
}
