/* eslint-disable @typescript-eslint/naming-convention */
import { IAnswerMapper } from 'Answers/domain/contracts/IAnswerMapper'
import { Answer, Attributes } from 'Answers/domain/entities/Answer'

import { AnswerDocument, AnswerModel } from '../models/AnswerModel'

export class AnswerMapper implements IAnswerMapper<AnswerDocument> {
  public toEntity(document: AnswerDocument): Answer {
    const { _id, ...attrs } = document.toObject<Attributes>()

    return Answer.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Answer): AnswerDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new AnswerModel({ ...attrs, _id })
  }

  public toEntityList(documents: AnswerDocument[]): Answer[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Answer[]): AnswerDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
