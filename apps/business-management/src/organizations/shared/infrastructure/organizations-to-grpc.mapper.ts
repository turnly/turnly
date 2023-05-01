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
  ): Producers.BusinessManagement.Organization {
    const organization = new Producers.BusinessManagement.Organization()

    if (entity) {
      organization
        .setId(entity.id)
        .setName(entity.name)
        .setSubdomain(entity.subdomain)
        .setStatus(entity.status)
        .setPlan(entity.plan)
        .setDisabledTelemetry(entity.disabledTelemetry)

      if (entity.brandingLogo) organization.setBrandingLogo(entity.brandingLogo)

      if (entity.brandingPrimaryColor)
        organization.setBrandingPrimaryColor(entity.brandingPrimaryColor)

      if (entity.brandingSecondaryColor)
        organization.setBrandingSecondaryColor(entity.brandingSecondaryColor)

      if (entity.brandingPrimaryBackground)
        organization.setBrandingPrimaryBackground(
          entity.brandingPrimaryBackground
        )

      if (entity.brandingSecondaryBackground)
        organization.setBrandingSecondaryBackground(
          entity.brandingSecondaryBackground
        )

      if (entity.brandingDesignType)
        organization.setBrandingDesignType(entity.brandingDesignType)
    }

    return organization
  }
}
