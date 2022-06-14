/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldMapper implements IFieldMapper<FieldDocument> {
  public toEntity(document: FieldDocument): Field {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Field>>()

    return Field.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Field): FieldDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new FieldModel({ ...attrs, _id })
  }

  public toEntityList(documents: FieldDocument[]): Field[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Field[]): FieldDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
