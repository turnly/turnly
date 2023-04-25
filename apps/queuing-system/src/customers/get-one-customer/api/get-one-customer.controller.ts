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
} from '@turnly/core'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { GetOneCustomerQuery } from '../queries/get-one-customer.query'
import { GetOneCustomerValidator } from './get-one-customer.validator'

export class GetOneCustomerController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneCustomerValidator)
  public async execute(params: GetOneCustomerQuery) {
    const customer = await this.queryBus.ask<Nullable<Customer>>(
      GetOneCustomerQuery.build(params)
    )

    if (!customer) throw new ResourceNotFoundException()

    return this.respond.ok(customer.toObject())
  }
}
