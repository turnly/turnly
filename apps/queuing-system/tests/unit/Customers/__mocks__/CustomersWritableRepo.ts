/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/shared'
import { TestWritableRepo } from '@turnly/testing'
import { Customer } from 'Customers/domain/entities/Customer'

export class CustomersWritableRepo
  extends TestWritableRepo<Customer>
  implements IWritableRepository<Customer> {}
