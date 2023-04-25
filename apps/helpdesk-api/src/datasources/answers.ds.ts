/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { DataSource } from '@turnly/graph'
import { AnswerModel } from 'models/answer.model'

import { Answers } from '../api.service'
import { IContext } from '../context.type'

type FindAnswerParams = {
  entityType: string
  fieldId?: Guid
  extra?: Extra[]
}

export class AnswersDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async findAnswers({
    entityType,
    fieldId = '',
    extra = [],
  }: FindAnswerParams): Promise<AnswerModel[]> {
    const data = (
      await Answers.listByField({
        entityType,
        fieldId,
        extrasList: extra,
      })
    ).dataList

    if (!data) return []

    return data.map(({ id, value, fieldId }) => ({
      id,
      value,
      fieldId,
    }))
  }
}
