/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationQuery } from '@turnly/core'
import { DeviceStatus } from 'devices/shared/domain/enums/device-status.enum'

export class GetOneDeviceByCriteriaQuery extends OrganizationQuery {
  public readonly status?: DeviceStatus
  public readonly pairingCode?: string
  public readonly locationId?: Guid
  public readonly createdAt?: Date
}
