/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetServiceRequest,
  GetServiceResponse,
  ListServicesOfOneLocationRequest,
  ListServicesOfOneLocationResponse,
} from '../../../producers/branch-management'

export type IGetServiceRequest = GetServiceRequest.AsObject
export type IGetServiceResponse = GetServiceResponse.AsObject
export type IListServicesOfOneLocationRequest =
  ListServicesOfOneLocationRequest.AsObject
export type IListServicesOfOneLocationResponse =
  ListServicesOfOneLocationResponse.AsObject

export interface IServicesClient {
  getOne(request: IGetServiceRequest): Promise<IGetServiceResponse>
  listServicesOfOneLocation(
    request: IListServicesOfOneLocationRequest
  ): Promise<IListServicesOfOneLocationResponse>
}
