/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetLocationReadyForServingRequest,
  GetLocationReadyForServingResponse,
  GetLocationRequest,
  GetLocationResponse,
  SearchAvailableLocationsForServingRequest,
  SearchAvailableLocationsForServingResponse,
} from '../../../producers/branch-management'

export type ISearchAvailableLocationsForServingRequest =
  SearchAvailableLocationsForServingRequest.AsObject
export type ISearchAvailableLocationsForServingResponse =
  SearchAvailableLocationsForServingResponse.AsObject
export type IGetLocationRequest = GetLocationRequest.AsObject
export type IGetLocationResponse = GetLocationResponse.AsObject
export type IGetLocationReadyForServingRequest =
  GetLocationReadyForServingRequest.AsObject
export type IGetLocationReadyForServingResponse =
  GetLocationReadyForServingResponse.AsObject

export interface ILocationsClient {
  searchAvailableLocationsForServing(
    request: ISearchAvailableLocationsForServingRequest
  ): Promise<ISearchAvailableLocationsForServingResponse>
  getOne(request: IGetLocationRequest): Promise<IGetLocationResponse>
  getReadyForServing(
    request: IGetLocationReadyForServingRequest
  ): Promise<IGetLocationReadyForServingResponse>
}
