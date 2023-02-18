/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Service } from 'services/Shared/domain/entities/Service'

export type IServicesMapper<Model> = IEntityMapper<Service, Model>
