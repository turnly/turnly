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

  public async save(entity: Field): Promise<Field> {
    const document = await this.persist(entity.toObject().id, entity)

    return this.fieldsMapper.toEntity(document)
  }
}
