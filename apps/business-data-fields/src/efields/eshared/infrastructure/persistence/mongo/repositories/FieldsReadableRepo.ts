/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IFieldsMapper } from 'efields/eshared/domain/contracts/IFieldsMapper'
import { IFieldsReadableRepo } from 'efields/eshared/domain/contracts/IFieldsRepo'
import { Field } from 'efields/eshared/domain/entities/Field'

import { FieldModel, IFieldDocument } from '../models/FieldModel'

export class FieldsReadableRepo
  extends MongoReadableRepo<Field, IFieldDocument>
  implements IFieldsReadableRepo
{
  public constructor(fieldsMapper: IFieldsMapper<IFieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
