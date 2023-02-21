/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateCustomersCommand } from 'customers/create-customer'
import {
  CreateCustomerParams,
  Customer,
} from 'customers/shared/domain/entities/customer.entity'

import { CreateCustomerValidator } from './create-customer.validator'

export class CreateCustomerController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateCustomerValidator)
  public async execute(params: CreateCustomerParams) {
    const customer = await this.commandBus.execute<
      Customer,
      CreateCustomersCommand
    >(new CreateCustomersCommand(params))

    return this.respond.created(customer.toObject())
  }
}
