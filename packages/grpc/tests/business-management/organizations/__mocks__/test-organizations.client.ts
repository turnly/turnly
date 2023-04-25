/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetOrganizationBySubdomainRequest,
  GetOrganizationRequest,
  GetOrganizationResponse,
} from '../../../../src/producers/business-management'

export class TestOrganizationsClient {
  protected readonly getOneMock = jest.fn()
  protected readonly getOneBySubdomainMock = jest.fn()

  public getOne(
    _request: GetOrganizationRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetOrganizationResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public getBySubdomain(
    _request: GetOrganizationBySubdomainRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetOrganizationResponse>
  ) {
    callback(null, this.getOneBySubdomainMock())
  }

  public attachGetOneResponse(response: GetOrganizationResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public attachGetOneBySubdomainResponse(response: GetOrganizationResponse) {
    this.getOneBySubdomainMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }

  public assertGetOneBySubdomainHasBeenCalled() {
    expect(this.getOneBySubdomainMock).toHaveBeenCalled()
  }
}
