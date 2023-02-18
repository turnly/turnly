/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IFieldsMapper } from 'fields/shared/domain/contracts/fields-mapper.interface'
import { IFieldsWritableRepo } from 'fields/shared/domain/contracts/fields-repo.interface'
import { Field } from 'fields/shared/domain/entities/field.entity'

import { FieldModel, IFieldDocument } from '../models/field.model'

export class FieldsWritableRepo
  extends MongoWritableRepo<Field, IFieldDocument>
  implements IFieldsWritableRepo
{
  public constructor(fieldsMapper: IFieldsMapper<IFieldDocument>) {
    super(FieldModel, fieldsMapper)
  }
}
