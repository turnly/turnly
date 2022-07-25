/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, ICommand } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'

export type CreateCustomerParams = Omit<EntityAttributes<Customer>, 'id'>

export class CreateCustomersCommand implements ICommand {
  public constructor(public readonly params: CreateCustomerParams) {}
}
