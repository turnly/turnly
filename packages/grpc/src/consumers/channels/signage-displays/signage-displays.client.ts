/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetPairingCodeSignageDisplayRequest,
  PairToLocationSignageDisplayRequest,
  SignageDisplaysClient,
  UnpairSignageDisplayRequest,
} from '../../../producers/channels'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetPairingCodeSignageDisplayRequest,
  IGetPairingCodeSignageDisplayResponse,
  IPairToLocationSignageDisplayRequest,
  IPairToLocationSignageDisplayResponse,
  ISignageDisplaysClient,
  IUnpairSignageDisplayRequest,
  IUnpairSignageDisplayResponse,
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

  public async getPairingCode(
    request: IGetPairingCodeSignageDisplayRequest
  ): Promise<IGetPairingCodeSignageDisplayResponse> {
    const req = new GetPairingCodeSignageDisplayRequest().setName(request.name)

    return (
      await promisify(this.client.getPairingCode.bind(this.client))(
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
}
