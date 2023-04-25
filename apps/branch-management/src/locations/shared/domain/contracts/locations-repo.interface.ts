/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Location } from '../entities/location.entity'

export type ILocationsReadableRepo = IReadableRepository<Location>
export type ILocationsWritableRepo = IWritableRepository<Location>
