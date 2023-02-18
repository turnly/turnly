/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { ICustomersMapper } from 'ecustomers/eshared/domain/contracts/ICustomersMapper'
import { ICustomerWritableRepo } from 'ecustomers/eshared/domain/contracts/ICustomersRepo'
import { Customer } from 'ecustomers/eshared/domain/entities/Customer'

import { CustomerDocument, CustomerModel } from '../models/CustomerModel'

export class CustomersWritableRepo
  extends MongoWritableRepo<Customer, CustomerDocument>
  implements ICustomerWritableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
