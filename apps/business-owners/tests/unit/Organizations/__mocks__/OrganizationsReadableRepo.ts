/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Organization } from 'Organizations/domain/entities/Organization'

export class OrganizationsReadableRepo
  extends TestReadableRepo<Organization>
  implements IReadableRepository<Organization> {}
