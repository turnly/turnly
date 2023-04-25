/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExtraMapper } from '../../../producers'
import {
  AnswersClient,
  CreateAnswersObject,
  CreateAnswersRequest,
  ListAnswersByFieldRequest,
} from '../../../producers/business-data-fields'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IAnswersClient,
  ICreateAnswersRequest,
  ICreateAnswersResponse,
  IListAnswersByFieldRequest,
  IListAnswersByFieldResponse,
} from './answers.type'

export class Answers extends Client<AnswersClient> implements IAnswersClient {
  public constructor(config?: ClientConfig) {
    super(AnswersClient, {
      internalAddress: 'business-data-fields.turnly.local',
      ...config,
    })
  }

  public create = async (
    request: ICreateAnswersRequest
  ): Promise<ICreateAnswersResponse> => {
    const answers = request.answersList.map(answer =>
      new CreateAnswersObject()
        .setValue(answer.value)
        .setFieldId(answer.fieldId)
        .setEntityId(answer.entityId)
        .setEntityType(answer.entityType)
        .setExtrasList(ExtraMapper.toRPC(answer.extrasList))
    )

    const req = new CreateAnswersRequest().setAnswersList(answers)

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async listByField(
    request: IListAnswersByFieldRequest
  ): Promise<IListAnswersByFieldResponse> {
    const req = new ListAnswersByFieldRequest()
      .setFieldId(request.fieldId)
      .setEntityType(request.entityType)
      .setExtrasList(ExtraMapper.toRPC(request.extrasList))

    return (
      await promisify(this.client.listByField.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
