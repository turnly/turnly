/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Scopes } from '@turnly/auth'
import { Guid, Nullable } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { Consumers, Producers } from '@turnly/grpc'
import {
  ConflictException,
  ResourceNotFoundException,
} from '@turnly/observability'
import { GetOneDeviceByCriteriaQuery } from 'devices/get-one-device-by-criteria'
import { IDevicesWritableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { PairToLocationCommand } from './pair-to-location.command'

type AccessToken = Producers.BusinessManagement.AccessToken.AsObject

@CommandHandler(PairToLocationCommand)
export class PairToLocationCommandHandler
  implements ICommandHandler<PairToLocationCommand, Device>
{
  private readonly tokensClient =
    new Consumers.BusinessManagement.AccessTokens()

  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly devicesWritableRepo: IDevicesWritableRepo
  ) {}

  public async execute(command: PairToLocationCommand) {
    const device = await this.queryBus.ask<Nullable<Device>>(
      GetOneDeviceByCriteriaQuery.build(command)
    )

    if (!device) throw new ResourceNotFoundException()

    const { name } = device.toObject()
    const { token } = await this.getAccessToken({ ...command, name })

    device.pairTo({ ...command, token })

    await this.devicesWritableRepo.save(device)

    this.eventBus.publish(device.pull())

    return device
  }

  private async getAccessToken(params: {
    name: string
    scopes: Scopes[]
    organizationId: Guid
  }): Promise<AccessToken> {
    this.tokensClient.setOrganizationId(params.organizationId)

    const { data, meta } = await this.tokensClient.create({
      name: params.name,
      scopesList: params.scopes,
    })

    if (!data) throw new ConflictException(String(meta?.message))

    return data
  }
}
