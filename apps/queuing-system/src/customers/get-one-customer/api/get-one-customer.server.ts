/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { GetOneCustomerController } from 'customers/get-one-customer'
import { CustomersMapper } from 'customers/shared/infrastructure/grpc/customers-mapper.grpc'

export class GetOneCustomerServer {
  public constructor(
    private readonly getOneCustomerController: GetOneCustomerController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.GetCustomerResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetCustomerRequest,
      Producers.QueuingSystem.GetCustomerResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetCustomerResponse>
  ) {
    const { data, meta } = await this.getOneCustomerController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetCustomerResponse()
    const customer = CustomersMapper.toRPC(data)

    response.setData(customer)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
