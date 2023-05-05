/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetOrganizationBySubdomainRequest,
  GetOrganizationRequest,
  OrganizationsClient,
} from '../../../producers/tenancy'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetOrganizationBySubdomainRequest,
  IGetOrganizationRequest,
  IGetOrganizationResponse,
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

  public async getOne(
    request: IGetOrganizationRequest
  ): Promise<IGetOrganizationResponse> {
    const req = new GetOrganizationRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getBySubdomain(
    request: IGetOrganizationBySubdomainRequest
  ): Promise<IGetOrganizationResponse> {
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
