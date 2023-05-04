/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

export class OrganizationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Organization>> | undefined
  ): Producers.Tenancy.Organization {
    const organization = new Producers.Tenancy.Organization()

    if (entity) {
      organization
        .setId(entity.id)
        .setName(entity.name)
        .setSubdomain(entity.subdomain)
        .setStatus(entity.status)

      organization.setMetadataList(
        entity.metadata.map(({ key, value }) =>
          new Producers.Tenancy.Extra().setKey(key).setValue(value)
        )
      )
    }

    return organization
  }
}
