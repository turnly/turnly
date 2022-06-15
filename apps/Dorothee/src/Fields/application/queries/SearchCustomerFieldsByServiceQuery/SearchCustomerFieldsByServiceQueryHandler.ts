import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IFieldReadableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { SearchCustomerFieldsByServiceQuery } from './SearchCustomerFieldsByServiceQuery'

@QueryHandler(SearchCustomerFieldsByServiceQuery)
export class SearchCustomerFieldsByServiceQueryHandler
  implements
    IQueryHandler<SearchCustomerFieldsByServiceQuery, Nullable<Field[]>>
{
  public constructor(private readonly fieldsReadableRepo: IFieldReadableRepo) {}

  public async execute({ params }: SearchCustomerFieldsByServiceQuery) {
    const { companyId, serviceId } = params
    const query = new QueryBuilder<Field>()
      .equal('companyId', companyId)
      .equal('entityType', 'customer')
      .inExtra('serviceId', serviceId)
      .getMany()

    return await this.fieldsReadableRepo.find(query)
  }
}
