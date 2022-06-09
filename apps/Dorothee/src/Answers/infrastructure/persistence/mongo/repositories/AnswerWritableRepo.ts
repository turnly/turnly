import { MongoRepository } from '@turnly/shared'
import { IAnswersMapper } from 'Answers/domain/contracts/IAnswersMapper'
import { IAnswersWritableRepo } from 'Answers/domain/contracts/IAnswersRepo'
import { Answer } from 'Answers/domain/entities/Answer'

import { AnswerDocument, AnswerModel } from '../models/AnswerModel'

export class AnswerWritableRepo
  extends MongoRepository<Answer, AnswerDocument>
  implements IAnswersWritableRepo
{
  public constructor(
    private readonly answersMapper: IAnswersMapper<AnswerDocument>
  ) {
    super(AnswerModel)
  }

  public async save(entity: Answer): Promise<Answer> {
    const document = await this.persist(entity.toObject().id, entity)

    return this.answersMapper.toEntity(document)
  }
}
