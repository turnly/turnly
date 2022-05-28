import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Field } from 'Fields/domain/entities/Field'
import { FieldTypes } from 'Fields/domain/enums/FieldTypes'
import { FieldDTO } from 'Fields/infrastructure/api/dtos/FieldDTO'

export class FieldMapper {
  public static toRPC(
    entity: Nullable<FieldDTO> | undefined
  ): Producers.Dorothee.Field {
    const field = new Producers.Dorothee.Field()

    if (entity) {
      field.setId(entity.id)
      field.setLabel(entity.label)
      field.setDescription(entity.description)
      field.setType(entity.type)
      field.setServiceId(entity.serviceId)
      field.setEntityType(entity.entityType)
      field.setIsRequired(entity.isRequired)
    }

    return field
  }

  public static toEntity(model: Producers.Dorothee.Field): Field {
    return Field.build({
      id: model.getId(),
      label: model.getLabel(),
      description: model.getDescription(),
      type: model.getType() as FieldTypes,
      serviceId: model.getServiceId(),
      entityType: model.getEntityType(),
      isRequired: model.getIsRequired(),
    })
  }
}
