/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IAnswersReadableRepo } from 'answers/shared/domain/contracts/answers-repo.interface'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { ListAnswersByFieldQuery } from './list-answers-by-field.query'

@QueryHandler(ListAnswersByFieldQuery)
export class ListAnswersByFieldQueryHandler
  implements IQueryHandler<ListAnswersByFieldQuery, Nullable<Answer[]>>
{
  public constructor(
    private readonly answersReadableRepo: IAnswersReadableRepo
  ) {}

  public async execute({
    organizationId,
    entityType,
    fieldId,
    extra,
  }: ListAnswersByFieldQuery) {
    const query = new QueryBuilder<Answer>()
      .equal('organizationId', organizationId)
      .equal('entityType', entityType)

    if (fieldId) query.equal('fieldId', fieldId)

    extra?.forEach(e => {
      query.inExtra(e.key, e.value)
    })

    return await this.answersReadableRepo.find(query.getMany())
  }
}
