import { Guid, NotImplementedError, Nullable } from '@turnly/common'
import { Criteria, MongoRepository } from '@turnly/shared'
import { IAnswerMapper } from 'Answers/domain/contracts/IAnswerMapper'
import { IAnswerReadableRepository } from 'Answers/domain/contracts/IAnswerRepository'
import { Answer } from 'Answers/domain/entities/Answer'

import { AnswerDocument, AnswerModel } from '../models/AnswerModel'

export class AnswerReadableRepository
  extends MongoRepository<Answer, AnswerDocument>
  implements IAnswerReadableRepository
{
  public constructor(
    private readonly answersMapper: IAnswerMapper<AnswerDocument>
  ) {
    super(AnswerModel)
  }

  public async getById(id: Guid): Promise<Nullable<Answer>> {
    const document = await this.model.findById(id)

    return document ? this.answersMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Answer[]>> {
    throw new NotImplementedError()
  }
}
