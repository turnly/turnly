/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

export type IOrganizationsMapper<Model> = IEntityMapper<Organization, Model>
