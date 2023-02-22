/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { Customer, Extra } from '../../../src/producers/queuing-system'

export class CustomerMother {
  static random(): Customer {
    const extra = ObjectMother.repeater(() => {
      const { key, value } = ObjectMother.extra()

      return new Extra().setKey(key).setValue(value)
    }, 10)

    return new Customer()
      .setId(ObjectMother.uuid('cus'))
      .setName(ObjectMother.names())
      .setLastname(ObjectMother.lastname())
      .setEmail(ObjectMother.email())
      .setCountry(ObjectMother.word())
      .setPhone(ObjectMother.phone())
      .setHasWhatsapp(ObjectMother.boolean())
      .setShowNameSignage(ObjectMother.boolean())
      .setExtrasList(extra)
  }

  static randomToObject() {
    return CustomerMother.random().toObject()
  }
}
