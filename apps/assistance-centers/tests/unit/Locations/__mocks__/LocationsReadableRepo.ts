/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Location } from 'Locations/domain/entities/Location'

export class LocationsReadableRepo
  extends TestReadableRepo<Location>
  implements IReadableRepository<Location> {}
