/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Integration } from '../../../../../src/Integrations/domain/entities/Integration'

export class IntegrationsQueryMother {
  static getOneWith(integration: Integration) {
    const { id, organizationId } = integration.toObject()

    return new QueryBuilder<Integration>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(integrations: Integration[]) {
    const ids = integrations.map(integration => integration.toObject().id)

    return new QueryBuilder<Integration>().in('id', ids).getMany(0, ids.length)
  }
}
