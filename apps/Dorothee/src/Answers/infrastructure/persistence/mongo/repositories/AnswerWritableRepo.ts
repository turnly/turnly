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

  public async save(entities: Answer | Answer[]): Promise<void> {
    Array.isArray(entities)
      ? await this.bulk(
          entities.map(entity => ({
            id: entity.toObject().id,
            entity,
          }))
        )
      : await this.persist(entities.toObject().id, entities)
  }
}
