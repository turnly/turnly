/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Organization } from 'Organizations/domain/entities/Organization'

export class OrganizationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Organization>> | undefined
  ): Producers.BusinessOwners.Organization {
    const organization = new Producers.BusinessOwners.Organization()

    if (entity) {
      organization.setId(entity.id)
      organization.setName(entity.name)
      organization.setSubdomain(entity.subdomain)
    }

    return organization
  }
}
