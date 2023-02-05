/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export class AnswersMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Answer>> | undefined
  ): Producers.BusinessDataFields.Answer {
    const answer = new Producers.BusinessDataFields.Answer()

    if (entity) {
      answer.setId(entity.id)
      answer.setValue(entity.value)
      answer.setFieldId(entity.fieldId)
      answer.setEntityId(entity.entityId)
      answer.setEntityType(entity.entityType)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.BusinessDataFields.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        answer.setExtrasList(extras)
      }
    }

    return answer
  }
}
