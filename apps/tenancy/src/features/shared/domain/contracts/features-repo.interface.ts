/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  IDestroyableRepository,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'

import { Feature } from '../entities/feature.entity'

export type IFeaturesReadableRepo = IReadableRepository<Feature>
export type IFeaturesWritableRepo = IWritableRepository<Feature>
export type IFeaturesDestroyableRepo = IDestroyableRepository
