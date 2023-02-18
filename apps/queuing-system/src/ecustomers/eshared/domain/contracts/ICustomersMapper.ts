/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Customer } from 'ecustomers/eshared/domain/entities/Customer'

export type ICustomersMapper<Model> = IEntityMapper<Customer, Model>
