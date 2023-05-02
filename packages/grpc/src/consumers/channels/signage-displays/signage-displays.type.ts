/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GetPairingCodeSignageDisplayRequest,
  GetPairingCodeSignageDisplayResponse,
  PairToLocationSignageDisplayRequest,
  PairToLocationSignageDisplayResponse,
  UnpairSignageDisplayRequest,
  UnpairSignageDisplayResponse,
} from '../../../producers/channels'

export type IGetPairingCodeSignageDisplayRequest =
  GetPairingCodeSignageDisplayRequest.AsObject
export type IGetPairingCodeSignageDisplayResponse =
  GetPairingCodeSignageDisplayResponse.AsObject

export type IPairToLocationSignageDisplayRequest =
  PairToLocationSignageDisplayRequest.AsObject
export type IPairToLocationSignageDisplayResponse =
  PairToLocationSignageDisplayResponse.AsObject

export type IUnpairSignageDisplayRequest = UnpairSignageDisplayRequest.AsObject
export type IUnpairSignageDisplayResponse =
  UnpairSignageDisplayResponse.AsObject

export interface ISignageDisplaysClient {
  getPairingCode(
    request: IGetPairingCodeSignageDisplayRequest
  ): Promise<IGetPairingCodeSignageDisplayResponse>
  pairToLocation(
    request: IPairToLocationSignageDisplayRequest
  ): Promise<IPairToLocationSignageDisplayResponse>
  unpair(
    request: IUnpairSignageDisplayRequest
  ): Promise<IUnpairSignageDisplayResponse>
}
