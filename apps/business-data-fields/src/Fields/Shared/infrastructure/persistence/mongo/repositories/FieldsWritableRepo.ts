/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IFieldsMapper } from 'Fields/Shared/domain/contracts/IFieldsMapper'
import { IFieldsWritableRepo } from 'Fields/Shared/domain/contracts/IFieldsRepo'
import { Field } from 'Fields/Shared/domain/entities/Field'

import { FieldModel, IFieldDocument } from '../models/FieldModel'

export class FieldsWritableRepo
  extends MongoWritableRepo<Field, IFieldDocument>
  implements IFieldsWritableRepo
{
  public constructor(fieldsMapper: IFieldsMapper<IFieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}