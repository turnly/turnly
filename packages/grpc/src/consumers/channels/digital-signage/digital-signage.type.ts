/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GetPairingCodeDigitalSignageRequest,
  GetPairingCodeDigitalSignageResponse,
  PairToLocationDigitalSignageRequest,
  PairToLocationDigitalSignageResponse,
} from '../../../producers/channels'

export type IGetPairingCodeDigitalSignageRequest =
  GetPairingCodeDigitalSignageRequest.AsObject
export type IGetPairingCodeDigitalSignageResponse =
  GetPairingCodeDigitalSignageResponse.AsObject

export type IPairToLocationDigitalSignageRequest =
  PairToLocationDigitalSignageRequest.AsObject
export type IPairToLocationDigitalSignageResponse =
  PairToLocationDigitalSignageResponse.AsObject

export interface IDigitalSignageClient {
  getPairingCode(
    request: IGetPairingCodeDigitalSignageRequest
  ): Promise<IGetPairingCodeDigitalSignageResponse>
  pairToLocation(
    request: IPairToLocationDigitalSignageRequest
  ): Promise<IPairToLocationDigitalSignageResponse>
}
