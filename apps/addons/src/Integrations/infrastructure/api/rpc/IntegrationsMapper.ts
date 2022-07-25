/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'

export class IntegrationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Integration>> | undefined
  ): Producers.Addons.Integration {
    const integration = new Producers.Addons.Integration()

    if (entity) {
      integration.setId(entity.id)
      integration.setName(entity.name)
      integration.setOriginsList(entity.origins)
      integration.setOrganizationId(entity.organizationId)
      integration.setCanCustomize(true)
    }

    return integration
  }
}
