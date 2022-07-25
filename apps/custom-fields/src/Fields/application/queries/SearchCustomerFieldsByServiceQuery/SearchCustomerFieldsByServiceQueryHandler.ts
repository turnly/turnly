/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IFieldsReadableRepo } from 'Fields/domain/contracts/IFieldsRepo'
import { Field } from 'Fields/domain/entities/Field'

import { SearchCustomerFieldsByServiceQuery } from './SearchCustomerFieldsByServiceQuery'

@QueryHandler(SearchCustomerFieldsByServiceQuery)
export class SearchCustomerFieldsByServiceQueryHandler
  implements
    IQueryHandler<SearchCustomerFieldsByServiceQuery, Nullable<Field[]>>
{
  public constructor(
    private readonly fieldsReadableRepo: IFieldsReadableRepo
  ) {}

  public async execute({
    organizationId,
    serviceId,
  }: SearchCustomerFieldsByServiceQuery) {
    const query = new QueryBuilder<Field>()
      .equal('organizationId', organizationId)
      .equal('entityType', 'customer')
      .inExtra('serviceId', serviceId)
      .getMany()

    return await this.fieldsReadableRepo.find(query)
  }
}
