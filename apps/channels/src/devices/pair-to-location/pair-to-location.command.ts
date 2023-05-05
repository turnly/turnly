/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationCommand } from '@turnly/core'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'

export class PairToLocationCommand extends OrganizationCommand {
  public readonly pairingCode: string
  public readonly locationId: Guid
  public readonly pairedBy?: Guid
  public readonly type: DeviceTypes
}
