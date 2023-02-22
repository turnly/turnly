/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { Answer, Extra } from '../../../src/producers/business-data-fields'

export class AnswerMother {
  static random(): Answer {
    const extra = ObjectMother.repeater(() => {
      const { key, value } = ObjectMother.extra()

      return new Extra().setKey(key).setValue(value)
    }, 10)

    return new Answer()
      .setId(ObjectMother.uuid('answer'))
      .setValue(ObjectMother.names())
      .setEntityId(ObjectMother.word())
      .setEntityType(ObjectMother.names())
      .setFieldId(ObjectMother.uuid('fld'))
      .setExtrasList(extra)
  }

  static randomToObject() {
    return AnswerMother.random().toObject()
  }
}
