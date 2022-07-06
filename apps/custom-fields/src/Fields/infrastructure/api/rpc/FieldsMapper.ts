/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export class FieldsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Field>> | undefined
  ): Producers.CustomFields.Field {
    const field = new Producers.CustomFields.Field()

    if (entity) {
      field.setId(entity.id)
      field.setLabel(entity.label)

      if (entity.description) field.setDescription(entity.description)

      field.setType(entity.type)
      field.setEntityType(entity.entityType)
      field.setIsRequired(entity.isRequired)

      if (entity.processors) {
        const processors = entity.processors.map(processor =>
          new Producers.CustomFields.Processor().setId(processor.toObject().id)
        )

        field.setProcessorsList(processors)
      }

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.CustomFields.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        field.setExtrasList(extras)
      }
    }

    return field
  }
}
