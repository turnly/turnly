/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export class AnswersMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Answer>> | undefined
  ): Producers.CustomFields.Answer {
    const answer = new Producers.CustomFields.Answer()

    if (entity) {
      answer.setId(entity.id)
      answer.setValue(entity.value)
      answer.setFieldId(entity.fieldId)
      answer.setEntityId(entity.entityId)
      answer.setEntityType(entity.entityType)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.CustomFields.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        answer.setExtrasList(extras)
      }
    }

    return answer
  }
}
