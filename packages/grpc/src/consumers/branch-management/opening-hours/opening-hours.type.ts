/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateRequest,
  CreateResponse,
  ListLocationHoursRequest,
  ListLocationHoursResponse,
} from '../../../producers/branch-management'

export type ICreateRequest = CreateRequest.AsObject
export type ICreateResponse = CreateResponse.AsObject
export type IListLocationHoursRequest = ListLocationHoursRequest.AsObject
export type IListLocationHoursResponse = ListLocationHoursResponse.AsObject

export interface IOpeningHoursClient {
  create(request: ICreateRequest): Promise<ICreateResponse>
  listLocationsHours(
    request: IListLocationHoursRequest
  ): Promise<IListLocationHoursResponse>
}
