/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { IntegrationStatus } from 'Integrations/domain/enums/IntegrationStatus'

import { IntegrationByIdQuery } from '../../../../src/Integrations/application/queries/IntegrationByIdQuery'
import { Integration } from '../../../../src/Integrations/domain/entities/Integration'

export class IntegrationMother {
  static create(
    name: string = ObjectMother.names(),
    status: IntegrationStatus = IntegrationStatus.ACTIVE,
    origins: string[] = [ObjectMother.names(), ObjectMother.names()],
    organizationId: Guid = ObjectMother.uuid('org')
  ): Integration {
    return Integration.create({
      name,
      status,
      origins,
      organizationId,
    })
  }

  static random(): Integration {
    return IntegrationMother.create()
  }

  static fromExistingIntegrationOnQuery(
    query: IntegrationByIdQuery | { id: Guid }
  ): Integration {
    return Integration.build({
      ...this.random().toObject(),
      id: query.id,
    })
  }
}
