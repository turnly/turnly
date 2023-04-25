/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Field } from '../../../../../../src/fields/shared/domain/entities/field.entity'

export class FieldsQueryMother {
  static getOneWith(field: Field) {
    const { id, organizationId } = field.toObject()

    return new QueryBuilder<Field>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(fields: Field[]) {
    const ids = fields.map(field => field.toObject().id)

    return new QueryBuilder<Field>().in('id', ids).getMany(0, ids.length)
  }
}
