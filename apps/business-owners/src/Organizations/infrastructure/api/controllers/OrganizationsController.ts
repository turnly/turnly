import { Guid, Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  OrganizationByIdQuery,
  OrganizationBySubDomainQuery,
} from 'Organizations/application/queries'
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
  public async getBySubDomain(params: { subdomain: string }) {
    const organization = await this.queryBus.ask<Nullable<Organization>>(
      new OrganizationBySubDomainQuery(params.subdomain)
    )

    if (!organization) throw new ResourceNotFoundException()

    return this.respond.ok(organization.toObject())
  }
}
