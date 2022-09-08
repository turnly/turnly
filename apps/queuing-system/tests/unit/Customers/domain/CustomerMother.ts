/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CreateCustomersCommand } from '../../../../src/Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQuery } from '../../../../src/Customers/application/queries/CustomerByIdQuery'
import { Customer } from '../../../../src/Customers/domain/entities/Customer'

export class CustomerMother {
  static create(
    name: string = ObjectMother.names(),
    lastname: string = ObjectMother.names(),
    email: string = ObjectMother.email(),
    phone: string = ObjectMother.phone(),
    country: string = ObjectMother.names(),
    hasWhatsapp = true,
    showNameSignage = true,
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Customer {
    return Customer.create({
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

  static random(): Customer {
    return CustomerMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Customer[] {
    return ObjectMother.repeater(CustomerMother.random, max)
  }

  static fromCommand(command: CreateCustomersCommand): Customer {
    return CustomerMother.create(
      command.params.name,
      undefined,
      undefined,
      undefined,
      undefined,
      command.params.hasWhatsapp,
      command.params.showNameSignage,
      command.params.organizationId,
      command.params.extra
    )
  }

  static fromExistingCustomerOnQuery(
    query: CustomerByIdQuery | { organizationId: Guid; id: Guid }
  ): Customer {
    return Customer.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Customer {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
