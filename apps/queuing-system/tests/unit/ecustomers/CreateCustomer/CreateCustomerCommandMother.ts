/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CreateCustomersCommand } from '../../../../src/ecustomers/CreateCustomer'

export class CreateCustomerCommandMother {
  static create(
    name: string = ObjectMother.names(),
    lastname: string = ObjectMother.names(),
    email: string = ObjectMother.email(),
    phone: string = ObjectMother.phone(),
    country: string = ObjectMother.names(),
    hasWhatsapp = true,
    showNameSignage = true,
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Extra[] = []
  ): CreateCustomersCommand {
    return new CreateCustomersCommand({
      name,
      lastname,
      email,
      phone,
      country,
      hasWhatsapp,
      showNameSignage,
      organizationId,
      extra,
    })
  }

  static random(): CreateCustomersCommand {
    return this.create()
  }
}
