/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GetOrganizationBySubdomainRequest,
  GetOrganizationRequest,
  GetOrganizationResponse,
} from '../../../producers/business-management'

export type IGetOrganizationRequest = GetOrganizationRequest.AsObject
export type IGetOrganizationResponse = GetOrganizationResponse.AsObject
export type IGetOrganizationBySubdomainRequest =
  GetOrganizationBySubdomainRequest.AsObject

export interface IOrganizationsClient {
  getOne(request: IGetOrganizationRequest): Promise<IGetOrganizationResponse>
  getBySubdomain(
    request: IGetOrganizationBySubdomainRequest
  ): Promise<IGetOrganizationResponse>
}
