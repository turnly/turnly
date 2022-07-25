/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
