/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { OrganizationBySubdomainQuery } from '../../../../../../src/Organizations/application/queries/OrganizationBySubdomainQuery'

export class OrganizationBySubdomainQueryMother {
  static create(
    subdomain: string = ObjectMother.word()
  ): OrganizationBySubdomainQuery {
    return new OrganizationBySubdomainQuery(subdomain)
  }

  static random(): OrganizationBySubdomainQuery {
    return this.create()
  }
}
