/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GeneratePairingCodeSignageDisplayRequest,
  GeneratePairingCodeSignageDisplayResponse,
  GetOneSignageDisplayRequest,
  GetOneSignageDisplayResponse,
  ListSignageDisplaysRequest,
  ListSignageDisplaysResponse,
  PairToLocationSignageDisplayRequest,
  PairToLocationSignageDisplayResponse,
  UnpairSignageDisplayRequest,
  UnpairSignageDisplayResponse,
  UpdateSignageDisplayRequest,
  UpdateSignageDisplayResponse,
} from '../../../producers/channels'

export type IGeneratePairingCodeSignageDisplayRequest =
  GeneratePairingCodeSignageDisplayRequest.AsObject
export type IGeneratePairingCodeSignageDisplayResponse =
  GeneratePairingCodeSignageDisplayResponse.AsObject

export type IPairToLocationSignageDisplayRequest =
  PairToLocationSignageDisplayRequest.AsObject
export type IPairToLocationSignageDisplayResponse =
  PairToLocationSignageDisplayResponse.AsObject

export type IUnpairSignageDisplayRequest = UnpairSignageDisplayRequest.AsObject
export type IUnpairSignageDisplayResponse =
  UnpairSignageDisplayResponse.AsObject

export type IGetOneSignageDisplayRequest = GetOneSignageDisplayRequest.AsObject
export type IGetOneSignageDisplayResponse =
  GetOneSignageDisplayResponse.AsObject

export type IListSignageDisplaysRequest = ListSignageDisplaysRequest.AsObject
export type IListSignageDisplaysResponse = ListSignageDisplaysResponse.AsObject

export type IUpdateSignageDisplayRequest = UpdateSignageDisplayRequest.AsObject
export type IUpdateSignageDisplayResponse =
  UpdateSignageDisplayResponse.AsObject

export interface ISignageDisplaysClient {
  generatePairingCode(
    request: IGeneratePairingCodeSignageDisplayRequest
  ): Promise<IGeneratePairingCodeSignageDisplayResponse>
  pairToLocation(
    request: IPairToLocationSignageDisplayRequest
  ): Promise<IPairToLocationSignageDisplayResponse>
  getOne(
    request: IGetOneSignageDisplayRequest
  ): Promise<IGetOneSignageDisplayResponse>
  unpair(
    request: IUnpairSignageDisplayRequest
  ): Promise<IUnpairSignageDisplayResponse>
  update(
    request: IUpdateSignageDisplayRequest
  ): Promise<IUpdateSignageDisplayResponse>
  list(
    request: IListSignageDisplaysRequest
  ): Promise<IListSignageDisplaysResponse>
}
