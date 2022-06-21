import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export class FieldsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Field>> | undefined
  ): Producers.Dorothee.Field {
    const field = new Producers.Dorothee.Field()

    if (entity) {
      field.setId(entity.id)
      field.setCompanyId(entity.companyId)
      field.setLabel(entity.label)

      if (entity.description) field.setDescription(entity.description)

      field.setType(entity.type)
      field.setEntityType(entity.entityType)
      field.setIsRequired(entity.isRequired)

      if (entity.processors) {
        const pross = entity.processors.map(processor =>
          new Producers.Dorothee.Processor().setId(processor.toObject().id)
        )
        field.setProcessorsList(pross)
      }

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.Dorothee.Extra().setKey(extra.key).setValue(extra.value)
        )

        field.setExtrasList(extras)
      }
    }

    return field
  }
}
