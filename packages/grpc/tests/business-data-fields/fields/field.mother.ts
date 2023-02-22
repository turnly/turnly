/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { Extra, Field } from '../../../src/producers/business-data-fields'

export class FieldMother {
  static random(): Field {
    const extra = ObjectMother.repeater(() => {
      const { key, value } = ObjectMother.extra()

      return new Extra().setKey(key).setValue(value)
    }, 10)

    return new Field()
      .setId(ObjectMother.uuid('fld'))
      .setLabel(ObjectMother.names())
      .setDescription(ObjectMother.paragraph())
      .setType(ObjectMother.word())
      .setEntityType(ObjectMother.names())
      .setIsRequired(ObjectMother.boolean())
      .setExtrasList(extra)
  }

  static randomToObject() {
    return FieldMother.random().toObject()
  }
}
