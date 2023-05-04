/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  ListLocationHoursRequest,
  ListLocationHoursResponse,
  SaveOpeningHoursRequest,
  SaveOpeningHoursResponse,
} from '../../../producers/branch-management'

export type ISaveOpeningHoursRequest = SaveOpeningHoursRequest.AsObject
export type ISaveOpeningHoursResponse = SaveOpeningHoursResponse.AsObject
export type IListLocationHoursRequest = ListLocationHoursRequest.AsObject
export type IListLocationHoursResponse = ListLocationHoursResponse.AsObject

export interface IOpeningHoursClient {
  save(request: ISaveOpeningHoursRequest): Promise<ISaveOpeningHoursResponse>
  listLocationsHours(
    request: IListLocationHoursRequest
  ): Promise<IListLocationHoursResponse>
}
