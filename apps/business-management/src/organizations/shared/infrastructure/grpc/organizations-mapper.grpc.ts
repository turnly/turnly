/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

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
