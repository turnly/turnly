/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  GetCustomerRequest,
  GetCustomerResponse,
} from '../../../../src/producers/queuing-system'

export class TestCustomersClient {
  protected readonly createMock = jest.fn()
  protected readonly getOneMock = jest.fn()

  public create(
    _request: CreateCustomerRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<CreateCustomerResponse>
  ) {
    callback(null, this.createMock())
  }

  public getOne(
    _request: GetCustomerRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetCustomerResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public attachCreateResponse(response: CreateCustomerResponse) {
    this.createMock.mockReturnValue(response)

    return this
  }

  public assertCreateHasBeenCalled() {
    expect(this.createMock).toHaveBeenCalled()
  }

  public attachGetOneResponse(response: GetCustomerResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }
}
