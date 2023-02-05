/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { FieldsController } from '../controllers/FieldsController'
import { FieldsMapper } from './FieldsMapper'

export class FieldsServer extends Producers.ServerImplementation<Producers.BusinessDataFields.IFieldsServer> {
  public constructor(private readonly fieldsController: FieldsController) {
    super()
  }

  @Producers.CallHandler(
    Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse
  )
  public async findCustomerFieldsByService(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.FindCustomerFieldsByServiceRequest,
      Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse>
  ) {
    const { data, meta } =
      await this.fieldsController.findCustomerFieldsByService({
        serviceId: call.request.getServiceId(),
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse()

    if (data) response.setDataList(data.map(FieldsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      findCustomerFieldsByService: this.findCustomerFieldsByService.bind(this),
      runProcessors: () => {
        throw new NotImplementedError()
      },
    }
  }
}
