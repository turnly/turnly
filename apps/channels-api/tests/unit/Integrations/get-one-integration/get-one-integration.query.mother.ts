/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneIntegrationQuery } from '../../../../src/integrations/shared/application/queries'

export class GetOneIntegrationQueryMother {
  static create(id: Guid = ObjectMother.uuid('int')): GetOneIntegrationQuery {
    return new GetOneIntegrationQuery(id)
  }

  static random(): GetOneIntegrationQuery {
    return this.create()
  }
}
