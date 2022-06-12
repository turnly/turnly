import { MongoWritableRepo } from '@turnly/shared'
import { IFieldMapper } from 'Fields/domain/contracts/IFieldMapper'
import { IFieldWritableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldWritableRepo
  extends MongoWritableRepo<Field, FieldDocument>
  implements IFieldWritableRepo
{
  public constructor(fieldsMapper: IFieldMapper<FieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
