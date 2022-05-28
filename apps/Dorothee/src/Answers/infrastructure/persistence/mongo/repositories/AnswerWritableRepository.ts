import { MongoRepository } from '@turnly/shared'
import { IAnswerMapper } from 'Answers/domain/contracts/IAnswerMapper'
import { IAnswerWritableRepository } from 'Answers/domain/contracts/IAnswerRepository'
import { Answer } from 'Answers/domain/entities/Answer'

import { AnswerDocument, AnswerModel } from '../models/AnswerModel'

export class AnswerWritableRepository
  extends MongoRepository<Answer, AnswerDocument>
  implements IAnswerWritableRepository
{
  public constructor(
    private readonly answersMapper: IAnswerMapper<AnswerDocument>
  ) {
    super(AnswerModel)
  }

  public async save(entity: Answer): Promise<Answer> {
    const document = await this.persist(entity.toObject().id, entity)

    return this.answersMapper.toEntity(document)
  }
}
