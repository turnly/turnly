/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'

export type ICustomersMapper<Model> = IEntityMapper<Customer, Model>
