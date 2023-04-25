/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { GetOrganizationBySubdomainQuery } from '../../../../src/organizations/get-organization-by-subdomain'

export class GetOrganizationBySubdomainQueryMother {
  static create(
    subdomain: string = ObjectMother.word()
  ): GetOrganizationBySubdomainQuery {
    return new GetOrganizationBySubdomainQuery(subdomain)
  }

  static random(): GetOrganizationBySubdomainQuery {
    return this.create()
  }
}
