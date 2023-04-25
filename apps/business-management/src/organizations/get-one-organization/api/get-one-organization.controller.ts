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
import { GetOneOrganizationQuery } from 'organizations/shared/application/queries/'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { GetOneOrganizationValidator } from './get-one-organization.validator'

export class GetOneOrganizationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneOrganizationValidator)
  public async execute(params: { id: Guid }) {
    const organization = await this.queryBus.ask<Nullable<Organization>>(
      new GetOneOrganizationQuery(params.id)
    )

    if (!organization) throw new ResourceNotFoundException()

    return this.respond.ok(organization.toObject())
  }
}
