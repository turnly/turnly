/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Organization } from 'Organizations/domain/entities/Organization'

export type IOrganizationsMapper<Model> = IEntityMapper<Organization, Model>
