/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Field } from '../../../../../src/Fields/domain/entities/Field'

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
