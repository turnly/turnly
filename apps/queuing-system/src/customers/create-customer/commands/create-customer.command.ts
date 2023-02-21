/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand } from '@turnly/shared'
import { CreateCustomerParams } from 'customers/shared/domain/entities/customer.entity'

export class CreateCustomersCommand implements ICommand {
  public constructor(public readonly params: CreateCustomerParams) {}
}
