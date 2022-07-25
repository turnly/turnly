/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Organization } from '../entities/Organization'

export type IOrganizationsReadableRepo = IReadableRepository<Organization>
export type IOrganizationsWritableRepo = IWritableRepository<Organization>
