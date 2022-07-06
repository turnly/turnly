/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { ICustomersMapper } from 'Customers/domain/contracts/ICustomersMapper'
import { ICustomerReadableRepo } from 'Customers/domain/contracts/ICustomersRepo'
import { Customer } from 'Customers/domain/entities/Customer'

import { CustomerDocument, CustomerModel } from '../models/CustomerModel'

export class CustomerReadableRepo
  extends MongoReadableRepo<Customer, CustomerDocument>
  implements ICustomerReadableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
