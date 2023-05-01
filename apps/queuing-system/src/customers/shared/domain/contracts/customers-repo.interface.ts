/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Customer } from '../entities/customer.entity'

export type ICustomersReadableRepo = IReadableRepository<Customer>
export type ICustomersWritableRepo = IWritableRepository<Customer>
