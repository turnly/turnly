/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { AnswersController } from '../controllers/AnswersController'
import { AnswersMapper } from './AnswersMapper'

export class AnswersServer extends Producers.ServerImplementation<Producers.CustomFields.IAnswersServer> {
  public constructor(private readonly answersController: AnswersController) {
    super()
  }

  @Producers.CallHandler(Producers.CustomFields.CreateAnswersResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.CustomFields.CreateAnswersRequest,
      Producers.CustomFields.CreateAnswersResponse
    >,
    callback: Producers.ICallback<Producers.CustomFields.CreateAnswersResponse>
  ) {
    const answers = call.request.getAnswersList().map(answer => {
      const { extrasList: extra, ...data } = answer.toObject()

      return {
        ...data,
        extra,
        organizationId: Client.getOrganizationId(call),
      }
    })

    const { data, meta } = await this.answersController.create(answers)

    const response = new Producers.CustomFields.CreateAnswersResponse()

    if (data) response.setDataList(data.map(AnswersMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.CustomFields.FindAnswersResponse)
  public async find(
    call: Producers.ServerUnaryCall<
      Producers.CustomFields.FindAnswersRequest,
      Producers.CustomFields.FindAnswersResponse
    >,
    callback: Producers.ICallback<Producers.CustomFields.FindAnswersResponse>
  ) {
    const { data, meta } = await this.answersController.find({
      entityType: call.request.getEntityType(),
      fieldId: call.request.getFieldId(),
      extra: call.request.getExtrasList().map(e => e.toObject()),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.CustomFields.FindAnswersResponse()
    const answers = data?.map(answer => AnswersMapper.toRPC(answer))

    if (!answers?.length) throw new ResourceNotFoundException()

    response.setDataList(answers)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      create: this.create.bind(this),
      find: this.find.bind(this),
    }
  }
}
