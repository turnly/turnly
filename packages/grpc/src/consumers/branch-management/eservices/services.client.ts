/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetServiceRequest,
  ListServicesOfOneLocationRequest,
  ServicesClient,
} from '../../../producers/branch-management'
import { Client } from '../../common/base.client'
import { promisify } from '../../common/promisify.util'
import type { ClientConfig } from '../../common/client-options.type'
import {
  IGetServiceRequest,
  IGetServiceResponse,
  IListServicesOfOneLocationRequest,
  IListServicesOfOneLocationResponse,
  IServicesClient,
} from './services.type'

export class Services
  extends Client<ServicesClient>
  implements IServicesClient
{
  public constructor(config?: ClientConfig) {
    super(ServicesClient, {
      internalAddress: 'branch-management.turnly.local',
      ...config,
    })
  }

  public async getOne(
    request: IGetServiceRequest
  ): Promise<IGetServiceResponse> {
    const req = new GetServiceRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async listServicesOfOneLocation(
    request: IListServicesOfOneLocationRequest
  ): Promise<IListServicesOfOneLocationResponse> {
    const req = new ListServicesOfOneLocationRequest().setLocationId(
      request.locationId
    )

    return (
      await promisify(this.client.listServicesOfOneLocation.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
