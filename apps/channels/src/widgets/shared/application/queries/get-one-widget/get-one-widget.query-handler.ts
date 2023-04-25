/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IWidgetsReadableRepo } from 'widgets/shared/domain/contratcs/widgets-repo.interface'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

import { GetOneWidgetQuery } from './get-one-widget.query'

@QueryHandler(GetOneWidgetQuery)
export class GetOneWidgetQueryHandler
  implements IQueryHandler<GetOneWidgetQuery, Nullable<Widget>>
{
  public constructor(
    private readonly widgetsReadableRepo: IWidgetsReadableRepo
  ) {}

  public async execute({ id }: GetOneWidgetQuery) {
    const query = new QueryBuilder<Widget>().equal('id', id).getOne()

    return await this.widgetsReadableRepo.getOne(query)
  }
}
