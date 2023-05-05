/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { ISignageDisplaysReadableRepo } from 'signage-displays/shared/domain/contratcs/signage-displays-repo.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import { GetOneSignageDisplayQuery } from './get-one-signage-display.query'

@QueryHandler(GetOneSignageDisplayQuery)
export class GetOneSignageDisplayQueryHandler
  implements IQueryHandler<GetOneSignageDisplayQuery, Nullable<SignageDisplay>>
{
  public constructor(
    private readonly signageDisplaysReadableRepo: ISignageDisplaysReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneSignageDisplayQuery) {
    const query = new QueryBuilder<SignageDisplay>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.signageDisplaysReadableRepo.getOne(query)
  }
}
