/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GeneratePairingCodeDeviceRequest,
  GeneratePairingCodeDeviceResponse,
  GetOneDeviceRequest,
  GetOneDeviceResponse,
  ListDevicesRequest,
  ListDevicesResponse,
  PairToLocationDeviceRequest,
  PairToLocationDeviceResponse,
  UnpairDeviceRequest,
  UnpairDeviceResponse,
} from '../../../producers/channels'

export type IGeneratePairingCodeDeviceRequest =
  GeneratePairingCodeDeviceRequest.AsObject
export type IGeneratePairingCodeDeviceResponse =
  GeneratePairingCodeDeviceResponse.AsObject

export type IPairToLocationDeviceRequest = PairToLocationDeviceRequest.AsObject
export type IPairToLocationDeviceResponse =
  PairToLocationDeviceResponse.AsObject

export type IUnpairDeviceRequest = UnpairDeviceRequest.AsObject
export type IUnpairDeviceResponse = UnpairDeviceResponse.AsObject

export type IGetOneDeviceRequest = GetOneDeviceRequest.AsObject
export type IGetOneDeviceResponse = GetOneDeviceResponse.AsObject

export type IListDevicesRequest = ListDevicesRequest.AsObject
export type IListDevicesResponse = ListDevicesResponse.AsObject

export interface IDevicesClient {
  generatePairingCode(
    request: IGeneratePairingCodeDeviceRequest
  ): Promise<IGeneratePairingCodeDeviceResponse>
  pairToLocation(
    request: IPairToLocationDeviceRequest
  ): Promise<IPairToLocationDeviceResponse>
  getOne(request: IGetOneDeviceRequest): Promise<IGetOneDeviceResponse>
  unpair(request: IUnpairDeviceRequest): Promise<IUnpairDeviceResponse>
  list(request: IListDevicesRequest): Promise<IListDevicesResponse>
}
