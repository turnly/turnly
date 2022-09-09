/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  ICommandBus,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateCustomersCommand } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQuery } from 'Customers/application/queries/CustomerByIdQuery'
import {
  CreateCustomerParams,
  Customer,
} from 'Customers/domain/entities/Customer'

import { validator } from '../validators/CustomersValidator'

export class CustomersController extends Controller {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateCustomerParams) {
    const customer = await this.commandBus.execute<
      Customer,
      CreateCustomersCommand
    >(new CreateCustomersCommand(params))

    return this.respond.created(customer.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: CustomerByIdQuery) {
    const customer = await this.queryBus.ask<Nullable<Customer>>(
      new CustomerByIdQuery(params.id, params.organizationId)
    )

    if (!customer) throw new ResourceNotFoundException()

    return this.respond.ok(customer.toObject())
  }
}
