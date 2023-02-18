/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { ICustomersMapper } from 'customers/shared/domain/contracts/ICustomersMapper'
import { ICustomerWritableRepo } from 'customers/shared/domain/contracts/ICustomersRepo'
import { Customer } from 'customers/shared/domain/entities/Customer'

import { CustomerDocument, CustomerModel } from '../models/CustomerModel'

export class CustomersWritableRepo
  extends MongoWritableRepo<Customer, CustomerDocument>
  implements ICustomerWritableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
