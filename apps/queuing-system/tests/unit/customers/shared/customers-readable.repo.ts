/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

export class CustomersReadableRepo
  extends TestReadableRepo<Customer>
  implements IReadableRepository<Customer> {}
