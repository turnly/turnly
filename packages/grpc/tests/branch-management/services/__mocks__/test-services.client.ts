/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetServiceRequest,
  GetServiceResponse,
  ListServicesOfOneLocationRequest,
  ListServicesOfOneLocationResponse,
} from '../../../../src/producers/branch-management'

export class TestServicesClient {
  protected readonly getOneMock = jest.fn()
  protected readonly listServicesOfOneLocationMock = jest.fn()

  public getOne(
    _request: GetServiceRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetServiceResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public listServicesOfOneLocation(
    _request: ListServicesOfOneLocationRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<ListServicesOfOneLocationResponse>
  ) {
    callback(null, this.listServicesOfOneLocationMock())
  }

  public attachGetOneResponse(response: GetServiceResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public attachListServicesOfOneLocationResponse(
    response: ListServicesOfOneLocationResponse
  ) {
    this.listServicesOfOneLocationMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }

  public assertListServicesOfOneLocationHasBeenCalled() {
    expect(this.listServicesOfOneLocationMock).toHaveBeenCalled()
  }
}
