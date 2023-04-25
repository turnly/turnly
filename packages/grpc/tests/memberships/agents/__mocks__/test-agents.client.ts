/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetAgentRequest,
  GetAgentResponse,
} from '../../../../src/producers/memberships'

export class TestAgentsClient {
  protected readonly getOneMock = jest.fn()

  public getOne(
    _request: GetAgentRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetAgentResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public attachGetOneResponse(response: GetAgentResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }
}
