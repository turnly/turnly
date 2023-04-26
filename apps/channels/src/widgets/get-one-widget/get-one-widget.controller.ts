/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

import { GetOneWidgetQuery } from './get-one-widget.query'
import { GetOneWidgetValidator } from './get-one-widget.validator'

export class GetOneWidgetController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneWidgetValidator)
  public async execute(params: { id: Guid }) {
    const widget = await this.queryBus.ask<Nullable<Widget>>(
      new GetOneWidgetQuery(params.id)
    )

    if (!widget) throw new ResourceNotFoundException()

    return this.respond.ok(widget.toObject())
  }
}
