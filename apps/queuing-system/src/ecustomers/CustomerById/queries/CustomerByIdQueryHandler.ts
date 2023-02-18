/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ICustomerReadableRepo } from 'ecustomers/eshared/domain/contracts/ICustomersRepo'
import { Customer } from 'ecustomers/eshared/domain/entities/Customer'

import { CustomerByIdQuery } from './CustomerByIdQuery'

@QueryHandler(CustomerByIdQuery)
export class CustomerByIdQueryHandler
  implements IQueryHandler<CustomerByIdQuery, Nullable<Customer>>
{
  public constructor(
    private readonly customerReadableRepo: ICustomerReadableRepo
  ) {}

  public async execute({ id, organizationId }: CustomerByIdQuery) {
    const query = new QueryBuilder<Customer>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.customerReadableRepo.getOne(query)
  }
}
