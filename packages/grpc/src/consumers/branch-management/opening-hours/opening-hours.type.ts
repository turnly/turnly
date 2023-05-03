/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BulkRequest,
  BulkResponse,
  ListLocationHoursRequest,
  ListLocationHoursResponse,
} from '../../../producers/branch-management'

export type IBulkRequest = BulkRequest.AsObject
export type IBulkResponse = BulkResponse.AsObject
export type IListLocationHoursRequest = ListLocationHoursRequest.AsObject
export type IListLocationHoursResponse = ListLocationHoursResponse.AsObject

export interface IOpeningHoursClient {
  bulk(request: IBulkRequest): Promise<IBulkResponse>
  listLocationsHours(
    request: IListLocationHoursRequest
  ): Promise<IListLocationHoursResponse>
}
