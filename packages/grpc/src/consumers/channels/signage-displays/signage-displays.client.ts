/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GeneratePairingCodeSignageDisplayRequest,
  GetOneSignageDisplayRequest,
  ListSignageDisplaysRequest,
  PairToLocationSignageDisplayRequest,
  SignageDisplaysClient,
  UnpairSignageDisplayRequest,
  UpdateSignageDisplayRequest,
} from '../../../producers/channels'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGeneratePairingCodeSignageDisplayRequest,
  IGeneratePairingCodeSignageDisplayResponse,
  IGetOneSignageDisplayRequest,
  IGetOneSignageDisplayResponse,
  IListSignageDisplaysRequest,
  IListSignageDisplaysResponse,
  IPairToLocationSignageDisplayRequest,
  IPairToLocationSignageDisplayResponse,
  ISignageDisplaysClient,
  IUnpairSignageDisplayRequest,
  IUnpairSignageDisplayResponse,
  IUpdateSignageDisplayRequest,
  IUpdateSignageDisplayResponse,
} from './signage-displays.type'

export class SignageDisplays
  extends Client<SignageDisplaysClient>
  implements ISignageDisplaysClient
{
  public constructor(config?: ClientConfig) {
    super(SignageDisplaysClient, {
      internalAddress: 'channels.turnly.local',
      ...config,
    })
  }

  public async generatePairingCode(
    request: IGeneratePairingCodeSignageDisplayRequest
  ): Promise<IGeneratePairingCodeSignageDisplayResponse> {
    const req = new GeneratePairingCodeSignageDisplayRequest().setName(
      request.name
    )

    return (
      await promisify(this.client.generatePairingCode.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async pairToLocation(
    request: IPairToLocationSignageDisplayRequest
  ): Promise<IPairToLocationSignageDisplayResponse> {
    const req = new PairToLocationSignageDisplayRequest()
      .setPairingCode(request.pairingCode)
      .setLocationId(request.locationId)

    return (
      await promisify(this.client.pairToLocation.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async unpair(
    request: IUnpairSignageDisplayRequest
  ): Promise<IUnpairSignageDisplayResponse> {
    const req = new UnpairSignageDisplayRequest()
      .setId(request.id)
      .setLocationId(request.locationId)

    return (
      await promisify(this.client.unpair.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getOne(
    request: IGetOneSignageDisplayRequest
  ): Promise<IGetOneSignageDisplayResponse> {
    const req = new GetOneSignageDisplayRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async list(
    request: IListSignageDisplaysRequest
  ): Promise<IListSignageDisplaysResponse> {
    const req = new ListSignageDisplaysRequest()
      .setLocationId(request.locationId)
      .setLimit(request.limit)
      .setOffset(request.offset)

    return (
      await promisify(this.client.list.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async update(
    request: IUpdateSignageDisplayRequest
  ): Promise<IUpdateSignageDisplayResponse> {
    const req = new UpdateSignageDisplayRequest()
      .setName(request.name)
      .setOrder(request.order)
      .setRefreshTimeUnit(request.refreshTimeUnit)
      .setRefreshTimeValue(request.refreshTimeValue)
      .setClearTicketsAfter(request.clearTicketsAfter)
      .setServiceIdsList(request.serviceIdsList)

    return (
      await promisify(this.client.update.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
