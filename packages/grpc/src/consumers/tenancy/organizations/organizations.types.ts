/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GetOrganizationBySubdomainRequest,
  GetOrganizationBySubdomainResponse,
  ListMyOrganizationsRequest,
  ListMyOrganizationsResponse,
} from '../../../producers/tenancy'

export type IListMyOrganizationsRequest = ListMyOrganizationsRequest.AsObject
export type IListMyOrganizationsResponse = ListMyOrganizationsResponse.AsObject
export type IGetOrganizationBySubdomainRequest =
  GetOrganizationBySubdomainRequest.AsObject
export type IGetOrganizationBySubdomainResponse =
  GetOrganizationBySubdomainResponse.AsObject

export interface IOrganizationsClient {
  listMyOrganizations(
    request: IListMyOrganizationsRequest
  ): Promise<IListMyOrganizationsResponse>
  getBySubdomain(
    request: IGetOrganizationBySubdomainRequest
  ): Promise<IGetOrganizationBySubdomainResponse>
}
