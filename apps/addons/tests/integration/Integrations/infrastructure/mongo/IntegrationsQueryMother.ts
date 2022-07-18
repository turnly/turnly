import { QueryBuilder } from '@turnly/shared'

import { Integration } from '../../../../../src/Integrations/domain/entities/Integration'

/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
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
