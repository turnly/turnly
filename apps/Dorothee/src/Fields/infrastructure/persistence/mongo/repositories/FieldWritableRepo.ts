import { MongoWritableRepo } from '@turnly/shared'
import { IFieldWritableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldDocument, FieldModel } from '../models/FieldModel'

export class FieldWritableRepo
  extends MongoWritableRepo<Field, FieldDocument>
  implements IFieldWritableRepo
{
  public constructor() {
    super(FieldModel)
  }
}
