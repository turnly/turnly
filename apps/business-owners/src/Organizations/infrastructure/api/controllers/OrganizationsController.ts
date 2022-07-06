/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid, Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { OrganizationByIdQuery } from 'Organizations/application/queries/OrganizationByIdQuery'
import { OrganizationBySubdomainQuery } from 'Organizations/application/queries/OrganizationBySubdomainQuery'
import { Organization } from 'Organizations/domain/entities/Organization'

import { validator } from '../validators/OrganizationsValidator'

export class OrganizationsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: { id: Guid }) {
    const organization = await this.queryBus.ask<Nullable<Organization>>(
      new OrganizationByIdQuery(params.id)
    )

    if (!organization) throw new ResourceNotFoundException()

    return this.respond.ok(organization.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getBySubdomain)
  public async getBySubdomain(params: { subdomain: string }) {
    const organization = await this.queryBus.ask<Nullable<Organization>>(
      new OrganizationBySubdomainQuery(params.subdomain)
    )

    if (!organization) throw new ResourceNotFoundException()

    return this.respond.ok(organization.toObject())
  }
}
