import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export class AnswersMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Answer>> | undefined
  ): Producers.Dorothee.Answer {
    const answer = new Producers.Dorothee.Answer()

    if (entity) {
      answer.setId(entity.id)
      answer.setValue(entity.value)
      answer.setFieldId(entity.fieldId)
      answer.setEntityId(entity.entityId)
      answer.setEntityType(entity.entityType)
      answer.setCompanyId(entity.companyId)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.Dorothee.Extra().setKey(extra.key).setValue(extra.value)
        )

        answer.setExtrasList(extras)
      }
    }

    return answer
  }
}
