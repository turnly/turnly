/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Customer } from '../../../../../src/Customers/domain/entities/Customer'

export class CustomersQueryMother {
  static getOneWith(customer: Customer) {
    const { id, organizationId } = customer.toObject()

    return new QueryBuilder<Customer>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(customers: Customer[]) {
    const ids = customers.map(customer => customer.toObject().id)

    return new QueryBuilder<Customer>().in('id', ids).getMany(0, ids.length)
  }
}
