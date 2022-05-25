import { Producers } from '@turnly/rpc'
import { Nullable } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'
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
      type: model.getType(),
      serviceId: model.getServiceId(),
      entityType: model.getEntityType(),
      isRequired: model.getIsRequired(),
    })
  }
}
