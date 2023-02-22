/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  FindCustomerFieldsByServiceRequest,
  FindCustomerFieldsByServiceResponse,
} from '../../../../src/producers/business-data-fields'

export class TestFieldsClient {
  protected readonly findCustomerFieldsByServiceMock = jest.fn()

  public findCustomerFieldsByService(
    _request: FindCustomerFieldsByServiceRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<FindCustomerFieldsByServiceResponse>
  ) {
    callback(null, this.findCustomerFieldsByServiceMock())
  }

  public attachFindCustomerFieldsByServiceResponse(
    response: FindCustomerFieldsByServiceResponse
  ) {
    this.findCustomerFieldsByServiceMock.mockReturnValue(response)

    return this
  }

  public assertFindCustomerFieldsByServiceHasBeenCalled() {
    expect(this.findCustomerFieldsByServiceMock).toHaveBeenCalled()
  }
}
