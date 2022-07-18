/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Service } from '../entities/Service'

export type IServicesReadableRepo = IReadableRepository<Service>
export type IServicesWritableRepo = IWritableRepository<Service>
