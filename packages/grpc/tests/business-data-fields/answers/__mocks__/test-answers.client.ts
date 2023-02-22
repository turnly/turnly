/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  CreateAnswersRequest,
  CreateAnswersResponse,
} from '../../../../src/producers/business-data-fields'

export class TestAnswersClient {
  protected readonly createAnswersMock = jest.fn()

  public create(
    _request: CreateAnswersRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<CreateAnswersResponse>
  ) {
    callback(null, this.createAnswersMock())
  }

  public attachCreateAnswersResponse(response: CreateAnswersResponse) {
    this.createAnswersMock.mockReturnValue(response)

    return this
  }

  public assertCreateAnswersHasBeenCalled() {
    expect(this.createAnswersMock).toHaveBeenCalled()
  }
}
