/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { ICustomersReadableRepo } from 'customers/shared/domain/contracts/customers-repo.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { GetOneCustomerQuery } from './get-one-customer.query'

@QueryHandler(GetOneCustomerQuery)
export class GetOneCustomerQueryHandler
  implements IQueryHandler<GetOneCustomerQuery, Nullable<Customer>>
{
  public constructor(
    private readonly customersReadableRepo: ICustomersReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneCustomerQuery) {
    const query = new QueryBuilder<Customer>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.customersReadableRepo.getOne(query)
  }
}
