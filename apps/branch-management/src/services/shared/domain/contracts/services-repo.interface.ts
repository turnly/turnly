/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Service } from '../entities/service.entity'

export type IServicesReadableRepo = IReadableRepository<Service>
export type IServicesWritableRepo = IWritableRepository<Service>
