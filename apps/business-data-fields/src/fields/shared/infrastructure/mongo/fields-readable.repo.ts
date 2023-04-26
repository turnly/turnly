/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IFieldsMapper } from 'fields/shared/domain/contracts/fields-mapper.interface'
import { IFieldsReadableRepo } from 'fields/shared/domain/contracts/fields-repo.interface'
import { Field } from 'fields/shared/domain/entities/field.entity'

import { FieldModel, IFieldDocument } from './field.model'

export class FieldsReadableRepo
  extends MongoReadableRepo<Field, IFieldDocument>
  implements IFieldsReadableRepo
{
  public constructor(fieldsMapper: IFieldsMapper<IFieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
