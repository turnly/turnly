/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetOrganizationBySubdomainRequest,
  ListMyOrganizationsRequest,
  OrganizationsClient,
} from '../../../producers/tenancy'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetOrganizationBySubdomainRequest,
  IGetOrganizationBySubdomainResponse,
  IListMyOrganizationsRequest,
  IListMyOrganizationsResponse,
  IOrganizationsClient,
} from './organizations.types'

export class Organizations
  extends Client<OrganizationsClient>
  implements IOrganizationsClient
{
  public constructor(config?: ClientConfig) {
    super(OrganizationsClient, {
      internalAddress: 'tenancy.turnly.local',
      ...config,
    })
  }

  public async listMyOrganizations(
    request: IListMyOrganizationsRequest
  ): Promise<IListMyOrganizationsResponse> {
    const req = new ListMyOrganizationsRequest()
      .setLimit(request.limit)
      .setOffset(request.offset)

    return (
      await promisify(this.client.listMyOrganizations.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getBySubdomain(
    request: IGetOrganizationBySubdomainRequest
  ): Promise<IGetOrganizationBySubdomainResponse> {
    const req = new GetOrganizationBySubdomainRequest().setSubdomain(
      request.subdomain
    )

    return (
      await promisify(this.client.getBySubdomain.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
