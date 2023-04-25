/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { ResourceNotFoundException } from '@turnly/observability'
import { EntityTypes } from 'answers/shared/domain/enums/entity-type.enum'
import { AnswersMapper } from 'answers/shared/infrastructure/grpc/answers-mapper.grpc'

import { ListAnswersByFieldController } from './list-answers-by-field.controller'

export class ListAnswersByFieldServer {
  public constructor(
    private readonly listAnswersByFieldController: ListAnswersByFieldController
  ) {}

  @Producers.CallHandler(
    Producers.BusinessDataFields.ListAnswersByFieldResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.ListAnswersByFieldRequest,
      Producers.BusinessDataFields.ListAnswersByFieldResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.ListAnswersByFieldResponse>
  ) {
    const { data, meta } = await this.listAnswersByFieldController.execute({
      entityType: call.request.getEntityType() as EntityTypes,
      fieldId: call.request.getFieldId(),
      extra: call.request.getExtrasList().map(e => e.toObject()),
      organizationId: Client.getOrganizationId(call),
    })

    const response =
      new Producers.BusinessDataFields.ListAnswersByFieldResponse()
    const answers = data?.map(answer => AnswersMapper.toRPC(answer))

    if (!answers?.length) throw new ResourceNotFoundException()

    response.setDataList(answers)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
