/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { CustomerByIdQuery } from 'ecustomers/CustomerById'
import { Customer } from 'ecustomers/eshared/domain/entities/Customer'

import { CustomerByIdValidator } from './CustomerByIdValidator'

export class CustomerByIdController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CustomerByIdValidator)
  public async execute(params: CustomerByIdQuery) {
    const customer = await this.queryBus.ask<Nullable<Customer>>(
      new CustomerByIdQuery(params.id, params.organizationId)
    )

    if (!customer) throw new ResourceNotFoundException()

    return this.respond.ok(customer.toObject())
  }
}
