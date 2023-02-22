/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExtraMapper } from '../../../producers/common/mappers/ExtraMapper'
import { GetCustomerRequest } from '../../../producers/queuing-system'
import {
  CreateCustomerObject,
  CreateCustomerRequest,
  CustomersClient,
} from '../../../producers/queuing-system'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  ICreateCustomerRequest,
  ICreateCustomerResponse,
  ICustomersClient,
  IGetCustomerRequest,
  IGetCustomerResponse,
} from './customers.type'

export class Customers
  extends Client<CustomersClient>
  implements ICustomersClient
{
  public constructor(config?: ClientConfig) {
    super(CustomersClient, {
      internalAddress: 'queuing-system.turnly.local',
      ...config,
    })
  }

  public async create({
    customer,
  }: ICreateCustomerRequest): Promise<ICreateCustomerResponse> {
    const req = new CreateCustomerRequest()

    if (customer) {
      req.setCustomer(
        new CreateCustomerObject()
          .setName(customer.name as string)
          .setLastname(customer?.lastname as string)
          .setEmail(customer?.email as string)
          .setCountry(customer.country)
          .setPhone(customer.phone as string)
          .setHasWhatsapp(customer.hasWhatsapp)
          .setShowNameSignage(customer.showNameSignage)
          .setExtrasList(ExtraMapper.toRPC(customer.extrasList))
      )
    }

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getOne(
    request: IGetCustomerRequest
  ): Promise<IGetCustomerResponse> {
    const req = new GetCustomerRequest()

    req.setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
