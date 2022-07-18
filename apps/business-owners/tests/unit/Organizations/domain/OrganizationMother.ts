/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'
import { OrganizationStatus } from 'Organizations/domain/enums/OrganizationStatus'

import { OrganizationByIdQuery } from '../../../../src/Organizations/application/queries/OrganizationByIdQuery'
import { OrganizationBySubdomainQuery } from '../../../../src/Organizations/application/queries/OrganizationBySubdomainQuery'
import { Organization } from '../../../../src/Organizations/domain/entities/Organization'

export class OrganizationMother {
  static create(
    name: string = ObjectMother.names(),
    status: OrganizationStatus = OrganizationStatus.ACTIVE,
    subdomain: string = ObjectMother.uuid('sub')
  ): Organization {
    return Organization.create({
      name,
      status,
      subdomain,
    })
  }

  static random(): Organization {
    return OrganizationMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Organization[] {
    return ObjectMother.repeater(OrganizationMother.random, max)
  }

  static fromExistingOrganizationOnQuery(
    query: OrganizationByIdQuery
  ): Organization {
    return Organization.build({
      ...this.random().toObject(),
      id: query.id,
    })
  }

  static fromExistingOrganizationOnQueryBySubdomain(
    query: OrganizationBySubdomainQuery
  ): Organization {
    return Organization.build({
      ...this.random().toObject(),
      subdomain: query.subdomain,
    })
  }
}
