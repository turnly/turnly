import { Guid } from '@turnly/common'
import { EntityAttributes } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Answer>

export class AnswerDTO {
  @MapProp()
  id: Guid

  @MapProp()
  value: string

  @MapProp()
  fieldId: string

  @MapProp()
  entityId: string

  @MapProp()
  entityType: string

  @MapProp()
  serviceId: string

  @MapProp()
  metadata?: object

  public static create(entity: Entity): AnswerDTO {
    return new Mapper().map(entity, new AnswerDTO())
  }

  public static createList(collection: Entity[]): AnswerDTO[] {
    return new Mapper().mapList(collection, AnswerDTO)
  }
}
