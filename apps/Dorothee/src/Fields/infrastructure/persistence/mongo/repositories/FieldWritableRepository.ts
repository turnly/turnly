import { MongoRepository } from '@turnly/core'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldWritableRepository } from 'Fields/domain/contracts/IFieldRepository'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldWritableRepository
  extends MongoRepository<Field, FieldDocument>
  implements IFieldWritableRepository
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
