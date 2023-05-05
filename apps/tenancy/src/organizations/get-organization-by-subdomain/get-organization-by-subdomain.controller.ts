/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { GetOrganizationBySubdomainQuery } from './get-organization-by-subdomain.query'
import { GetOrganizationBySubdomainValidator } from './get-organization-by-subdomain.validator'

export class GetOrganizationBySubdomainController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOrganizationBySubdomainValidator)
  public async execute(params: { subdomain: string }) {
    const organization = await this.queryBus.ask<Organization>(
      GetOrganizationBySubdomainQuery.build(params)
    )

    return this.respond.ok(organization.toObject())
  }
}
