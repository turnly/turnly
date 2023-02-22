/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  FieldsClient,
  FindCustomerFieldsByServiceRequest,
} from '../../../producers/business-data-fields'
import { Client } from '../../common/base.client'
import { promisify } from '../../common/promisify.util'
import type { ClientConfig } from '../../common/client-options.type'
import {
  IFieldsClient,
  IFindCustomerFieldsByServiceRequest,
  IFindCustomerFieldsByServiceResponse,
} from './fields.type'

export class Fields extends Client<FieldsClient> implements IFieldsClient {
  public constructor(config?: ClientConfig) {
    super(FieldsClient, {
      internalAddress: 'business-data-fields.turnly.local',
      ...config,
    })
  }

  public findCustomerFieldsByService = async (
    request: IFindCustomerFieldsByServiceRequest
  ): Promise<IFindCustomerFieldsByServiceResponse> => {
    const req = new FindCustomerFieldsByServiceRequest().setServiceId(
      request.serviceId
    )

    return (
      await promisify(
        this.client.findCustomerFieldsByService.bind(this.client)
      )(req, this.getMeta(), {})
    ).toObject()
  }
}
