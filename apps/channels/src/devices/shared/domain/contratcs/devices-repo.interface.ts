/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'
import { Device } from 'devices/shared/domain/entities/device.entity'

export type IDevicesReadableRepo = IReadableRepository<Device>
export type IDevicesWritableRepo = IWritableRepository<Device>
