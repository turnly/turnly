/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Organization } from '../entities/Organization'

export type IOrganizationsReadableRepo = IReadableRepository<Organization>
export type IOrganizationsWritableRepo = IWritableRepository<Organization>
