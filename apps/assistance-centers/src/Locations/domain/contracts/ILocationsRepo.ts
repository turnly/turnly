/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Location } from '../entities/Location'

export type ILocationsReadableRepo = IReadableRepository<Location>
export type ILocationsWritableRepo = IWritableRepository<Location>
