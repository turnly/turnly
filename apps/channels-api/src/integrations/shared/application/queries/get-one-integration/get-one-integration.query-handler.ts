/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IIntegrationsReadableRepo } from 'integrations/shared/domain/contratcs/integrations-repo.interface'
import { Integration } from 'integrations/shared/domain/entities/integration.entity'

import { GetOneIntegrationQuery } from './get-one-integration.query'

@QueryHandler(GetOneIntegrationQuery)
export class GetOneIntegrationQueryHandler
  implements IQueryHandler<GetOneIntegrationQuery, Nullable<Integration>>
{
  public constructor(
    private readonly integrationsReadableRepo: IIntegrationsReadableRepo
  ) {}

  public async execute({ id }: GetOneIntegrationQuery) {
    const query = new QueryBuilder<Integration>().equal('id', id).getOne()

    return await this.integrationsReadableRepo.getOne(query)
  }
}
