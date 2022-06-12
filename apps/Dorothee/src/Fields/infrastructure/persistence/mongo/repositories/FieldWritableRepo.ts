import { MongoRepository } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldWritableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldWritableRepo
  extends MongoRepository<Field, FieldDocument>
  implements IFieldWritableRepo
{
  public constructor(
    private readonly fieldsMapper: IFieldMapper<FieldDocument>
  ) {
    super(FieldModel)
  }

  public async save(entities: Field | Field[]): Promise<void> {
    Array.isArray(entities)
      ? await this.bulk(
          entities.map(entity => ({
            id: entity.toObject().id,
            entity,
          }))
        )
      : await this.persist(entities.toObject().id, entities)
  }
}
