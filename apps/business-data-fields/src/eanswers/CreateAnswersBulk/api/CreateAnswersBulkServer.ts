/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { EntityTypes } from 'eanswers/eshared/domain/enums/EntityType'
import { AnswersMapper } from 'eanswers/eshared/infrastructure/grpc/AnswersMapper'

import { CreateAnswersBulkController } from './CreateAnswersBulkController'

export class CreateAnswersBulkServer {
  public constructor(
    private readonly createAnswersBulkController: CreateAnswersBulkController
  ) {}

  @Producers.CallHandler(Producers.BusinessDataFields.CreateAnswersResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.CreateAnswersRequest,
      Producers.BusinessDataFields.CreateAnswersResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.CreateAnswersResponse>
  ) {
    const answers = call.request.getAnswersList().map(answer => {
      const { extrasList: extra, ...data } = answer.toObject()

      return {
        ...data,
        entityType: answer.getEntityType() as EntityTypes,
        extra,
      }
    })

    const { data, meta } = await this.createAnswersBulkController.execute({
      answers,
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessDataFields.CreateAnswersResponse()

    if (data) response.setDataList(data.map(AnswersMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
