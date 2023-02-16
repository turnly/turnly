/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { ICustomersMapper } from 'Customers/Shared/domain/contracts/ICustomersMapper'
import { ICustomerReadableRepo } from 'Customers/Shared/domain/contracts/ICustomersRepo'
import { Customer } from 'Customers/Shared/domain/entities/Customer'

import { CustomerDocument, CustomerModel } from '../models/CustomerModel'

export class CustomersReadableRepo
  extends MongoReadableRepo<Customer, CustomerDocument>
  implements ICustomerReadableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
