import { Guid, NotImplementedError, Nullable } from '@turnly/common'
import { Criteria, MongoRepository } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldReadableRepository } from 'Fields/domain/contracts/IFieldRepository'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldReadableRepository
  extends MongoRepository<Field, FieldDocument>
  implements IFieldReadableRepository
{
  public constructor(
    private readonly fieldsMapper: IFieldMapper<FieldDocument>
  ) {
    super(FieldModel)
  }

  public async getById(id: Guid): Promise<Nullable<Field>> {
    const document = await this.model.findById(id)

    return document ? this.fieldsMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Field[]>> {
    throw new NotImplementedError()
  }
}
