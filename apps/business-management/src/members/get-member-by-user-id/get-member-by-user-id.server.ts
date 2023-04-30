/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { MembersMapper } from 'members/shared/infrastructure/members-to-grpc.mapper'

import { GetMemberByUserIdController } from './get-member-by-user-id.controller'

export class GetMemberByUserIdServer {
  public constructor(
    private readonly getMemberByUserIdController: GetMemberByUserIdController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetMemberByUserIdResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetMemberByUserIdRequest,
      Producers.BusinessManagement.GetMemberByUserIdResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetMemberByUserIdResponse>
  ) {
    const { data, meta } = await this.getMemberByUserIdController.execute({
      userId: call.request.getUserId(),
    })

    const response = new Producers.BusinessManagement.GetMemberByUserIdResponse()
    const member = MembersMapper.toRPC(data)

    response.setData(member)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
