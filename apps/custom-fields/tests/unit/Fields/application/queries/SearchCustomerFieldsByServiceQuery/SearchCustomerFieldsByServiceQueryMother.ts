/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
