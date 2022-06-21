import { MongoWritableRepo } from '@turnly/shared'
import { IFieldsMapper } from 'Fields/domain/contracts/IFieldsMapper'
import { IFieldsWritableRepo } from 'Fields/domain/contracts/IFieldsRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldModel, IFieldDocument } from '../models/FieldModel'

export class FieldsWritableRepo
  extends MongoWritableRepo<Field, IFieldDocument>
  implements IFieldsWritableRepo
{
  public constructor(fieldsMapper: IFieldsMapper<IFieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
