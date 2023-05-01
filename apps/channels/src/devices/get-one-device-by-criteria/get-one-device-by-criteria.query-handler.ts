/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { BadRequestException } from '@turnly/observability'
import { IDevicesReadableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { GetOneDeviceByCriteriaQuery } from './get-one-device-by-criteria.query'

@QueryHandler(GetOneDeviceByCriteriaQuery)
export class GetOneDeviceByCriteriaQueryHandler
  implements IQueryHandler<GetOneDeviceByCriteriaQuery, Nullable<Device>>
{
  public constructor(
    private readonly devicesReadableRepo: IDevicesReadableRepo
  ) {}

  public async execute({
    organizationId,
    ...params
  }: GetOneDeviceByCriteriaQuery) {
    if (!Object.values(params).length)
      throw new BadRequestException('At least one criteria is required')

    const query = new QueryBuilder<Device>()

    query.equal('organizationId', organizationId)

    if (params.status) query.equal('status', params.status)
    if (params.pairingCode) query.equal('pairingCode', params.pairingCode)
    if (params.locationId) query.equal('locationId', params.locationId)

    return await this.devicesReadableRepo.getOne(query.getOne())
  }
}
