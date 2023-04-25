/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { OrganizationBySubdomainQuery } from 'Organizations/application/queries/OrganizationBySubdomainQuery'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { GetOrganizationBySubdomainValidator } from './get-organization-by-subdomain.validator'

export class GetOrganizationBySubdomainController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOrganizationBySubdomainValidator)
  public async execute(params: { subdomain: string }) {
    const organization = await this.queryBus.ask<Nullable<Organization>>(
      new OrganizationBySubdomainQuery(params.subdomain)
    )

    if (!organization) throw new ResourceNotFoundException()

    return this.respond.ok(organization.toObject())
  }
}
