/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

export class OrganizationsReadableRepo
  extends TestReadableRepo<Organization>
  implements IReadableRepository<Organization> {}