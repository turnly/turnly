/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { MembersMapper } from 'members/shared/infrastructure/members-to-grpc.mapper'

import { GetOneMemberController } from './get-one-member.controller'

export class GetOneMemberServer {
  public constructor(
    private readonly getOneMemberController: GetOneMemberController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetMemberResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetMemberRequest,
      Producers.BusinessManagement.GetMemberResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetMemberResponse>
  ) {
    const { data, meta } = await this.getOneMemberController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessManagement.GetMemberResponse()
    const member = MembersMapper.toRPC(data)

    response.setData(member)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}