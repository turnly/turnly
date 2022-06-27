import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ICustomerReadableRepo } from 'Customers/domain/contracts/ICustomersRepo'
import { Customer } from 'Customers/domain/entities/Customer'

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
