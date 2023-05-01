/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { ICustomersMapper } from 'customers/shared/domain/contracts/customers-mapper.interface'
import { ICustomersWritableRepo } from 'customers/shared/domain/contracts/customers-repo.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { CustomerDocument, CustomerModel } from './customer.model'

export class CustomersWritableRepo
  extends MongoWritableRepo<Customer, CustomerDocument>
  implements ICustomersWritableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
