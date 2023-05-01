/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { ICustomersMapper } from 'customers/shared/domain/contracts/customers-mapper.interface'
import { ICustomersReadableRepo } from 'customers/shared/domain/contracts/customers-repo.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { CustomerDocument, CustomerModel } from './customer.model'

export class CustomersReadableRepo
  extends MongoReadableRepo<Customer, CustomerDocument>
  implements ICustomersReadableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
