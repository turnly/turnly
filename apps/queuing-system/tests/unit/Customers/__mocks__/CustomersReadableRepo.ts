/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Customer } from 'Customers/domain/entities/Customer'

export class CustomersReadableRepo
  extends TestReadableRepo<Customer>
  implements IReadableRepository<Customer> {}
