/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetLocationRequest,
  GetLocationResponse,
  SearchAvailableLocationsForServingRequest,
  SearchAvailableLocationsForServingResponse,
} from '../../../../src/producers/branch-management'

export class TestLocationsClient {
  protected readonly getOneMock = jest.fn()
  protected readonly searchAvailableLocationsForServingMock = jest.fn()

  public getOne(
    _request: GetLocationRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetLocationResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public searchAvailableLocationsForServing(
    _request: SearchAvailableLocationsForServingRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<SearchAvailableLocationsForServingResponse>
  ) {
    callback(null, this.searchAvailableLocationsForServingMock())
  }

  public attachGetOneResponse(response: GetLocationResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public attachSearchAvailableLocationsForServingResponse(
    response: SearchAvailableLocationsForServingResponse
  ) {
    this.searchAvailableLocationsForServingMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }

  public assertSearchAvailableLocationsForServingHasBeenCalled() {
    expect(this.searchAvailableLocationsForServingMock).toHaveBeenCalled()
  }
}
