/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { GetOneIntegrationQuery } from 'integrations/shared/application/queries'
import { Integration } from 'integrations/shared/domain/entities/integration.entity'

import { GetOneIntegrationValidator } from './get-one-integration.validator'

export class GetOneIntegrationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneIntegrationValidator)
  public async execute(params: { id: Guid }) {
    const integration = await this.queryBus.ask<Nullable<Integration>>(
      new GetOneIntegrationQuery(params.id)
    )

    if (!integration) throw new ResourceNotFoundException()

    return this.respond.ok(integration.toObject())
  }
}
