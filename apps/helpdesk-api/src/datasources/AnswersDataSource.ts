/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { AnswerModel } from 'models/AnswerModel'
import { CacheTTL } from 'shared/CacheTTL'

import { Answers } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

type FindAnswerParams = {
  entityType: string
  fieldId?: Guid
  extra?: Extra[]
}

@CacheSource({ ttl: CacheTTL.THREE_MINUTES })
export class AnswersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async findAnswers({
    entityType,
    fieldId = '',
    extra = [],
  }: FindAnswerParams): Promise<AnswerModel[]> {
    const data = (
      await Answers.find({
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
