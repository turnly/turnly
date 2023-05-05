/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetMemberRequest,
  GetMemberResponse,
} from '../../../../src/producers/tenancy'

export class TestMembersClient {
  protected readonly getOneMock = jest.fn()

  public getOne(
    _request: GetMemberRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetMemberResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public attachGetOneResponse(response: GetMemberResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }
}
