/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { SearchCustomerFieldsByServiceQuery } from '../../../../../../src/Fields/application/queries/SearchCustomerFieldsByServiceQuery'

export class SearchCustomerFieldsByServiceQueryMother {
  static create(
    serviceId: Guid = ObjectMother.uuid('ser'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): SearchCustomerFieldsByServiceQuery {
    return new SearchCustomerFieldsByServiceQuery(serviceId, organizationId)
  }

  static random(): SearchCustomerFieldsByServiceQuery {
    return this.create()
  }
}
