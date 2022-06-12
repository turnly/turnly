import { Guid, Nullable } from '@turnly/common'
import { MongoRepository, QueryBuilderObject } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldReadableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldReadableRepo
  extends MongoRepository<Field, FieldDocument>
  implements IFieldReadableRepo
{
  public constructor(
    private readonly fieldsMapper: IFieldMapper<FieldDocument>
  ) {
    super(FieldModel)
  }

  public async getOne(id: Guid): Promise<Nullable<Field>> {
    const document = await this.model.findById(id)

    return document ? this.fieldsMapper.toEntity(document) : null
  }

  public async find(
    query: QueryBuilderObject<Field>
  ): Promise<Field[] | Nullable<Field>> {
    const documents = await this.search(query)

    return Array.isArray(documents)
      ? this.fieldsMapper.toEntityList(documents)
      : documents
      ? this.fieldsMapper.toEntity(documents)
      : null
  }
}
