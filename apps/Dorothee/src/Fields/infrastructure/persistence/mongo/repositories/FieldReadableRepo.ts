import { MongoReadableRepo } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldReadableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldReadableRepo
  extends MongoReadableRepo<Field, FieldDocument>
  implements IFieldReadableRepo
{
  public constructor(fieldsMapper: IFieldMapper<FieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
