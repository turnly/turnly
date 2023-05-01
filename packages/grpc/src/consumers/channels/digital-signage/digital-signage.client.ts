/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  DigitalSignageClient,
  GetPairingCodeDigitalSignageRequest,
  PairToLocationDigitalSignageRequest,
} from '../../../producers/channels'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IDigitalSignageClient,
  IGetPairingCodeDigitalSignageRequest,
  IGetPairingCodeDigitalSignageResponse,
  IPairToLocationDigitalSignageRequest,
  IPairToLocationDigitalSignageResponse,
} from './digital-signage.type'

export class DigitalSignage
  extends Client<DigitalSignageClient>
  implements IDigitalSignageClient
{
  public constructor(config?: ClientConfig) {
    super(DigitalSignageClient, {
      internalAddress: 'channels.turnly.local',
      ...config,
    })
  }

  public async getPairingCode(
    request: IGetPairingCodeDigitalSignageRequest
  ): Promise<IGetPairingCodeDigitalSignageResponse> {
    const req = new GetPairingCodeDigitalSignageRequest().setName(request.name)

    return (
      await promisify(this.client.getPairingCode.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async pairToLocation(
    request: IPairToLocationDigitalSignageRequest
  ): Promise<IPairToLocationDigitalSignageResponse> {
    const req = new PairToLocationDigitalSignageRequest()
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
}
