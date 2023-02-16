/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { EntityTypes } from 'Answers/Shared/domain/enums/EntityType'
import { AnswersMapper } from 'Answers/Shared/infrastructure/grpc/AnswersMapper'

import { FindAnswersController } from './FindAnswersController'

export class FindAnswersServer {
  public constructor(
    private readonly findAnswersController: FindAnswersController
  ) {}

  @Producers.CallHandler(Producers.BusinessDataFields.FindAnswersResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.FindAnswersRequest,
      Producers.BusinessDataFields.FindAnswersResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.FindAnswersResponse>
  ) {
    const { data, meta } = await this.findAnswersController.execute({
      entityType: call.request.getEntityType() as EntityTypes,
      fieldId: call.request.getFieldId(),
      extra: call.request.getExtrasList().map(e => e.toObject()),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessDataFields.FindAnswersResponse()
    const answers = data?.map(answer => AnswersMapper.toRPC(answer))

    if (!answers?.length) throw new ResourceNotFoundException()

    response.setDataList(answers)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
