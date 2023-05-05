/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  DevicesClient,
  GeneratePairingCodeDeviceRequest,
  GetOneDeviceRequest,
  ListDevicesRequest,
  PairToLocationDeviceRequest,
  UnpairDeviceRequest,
} from '../../../producers/channels'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IDevicesClient,
  IGeneratePairingCodeDeviceRequest,
  IGeneratePairingCodeDeviceResponse,
  IGetOneDeviceRequest,
  IGetOneDeviceResponse,
  IListDevicesRequest,
  IListDevicesResponse,
  IPairToLocationDeviceRequest,
  IPairToLocationDeviceResponse,
  IUnpairDeviceRequest,
  IUnpairDeviceResponse,
} from './devices.type'

export class Devices extends Client<DevicesClient> implements IDevicesClient {
  public constructor(config?: ClientConfig) {
    super(DevicesClient, {
      internalAddress: 'channels.turnly.local',
      ...config,
    })
  }

  public async generatePairingCode(
    request: IGeneratePairingCodeDeviceRequest
  ): Promise<IGeneratePairingCodeDeviceResponse> {
    const req = new GeneratePairingCodeDeviceRequest().setName(request.name)

    return (
      await promisify(this.client.generatePairingCode.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async pairToLocation(
    request: IPairToLocationDeviceRequest
  ): Promise<IPairToLocationDeviceResponse> {
    const req = new PairToLocationDeviceRequest()
      .setPairingCode(request.pairingCode)
      .setLocationId(request.locationId)
      .setType(request.type)

    return (
      await promisify(this.client.pairToLocation.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async unpair(
    request: IUnpairDeviceRequest
  ): Promise<IUnpairDeviceResponse> {
    const req = new UnpairDeviceRequest()
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
    request: IGetOneDeviceRequest
  ): Promise<IGetOneDeviceResponse> {
    const req = new GetOneDeviceRequest()
      .setId(request.id)
      .setLocationId(request.locationId)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async list(
    request: IListDevicesRequest
  ): Promise<IListDevicesResponse> {
    const req = new ListDevicesRequest()
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
}
