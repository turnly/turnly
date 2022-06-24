import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Location } from '../entities/Location'

export type ILocationsReadableRepo = IReadableRepository<Location>
export type ILocationsWritableRepo = IWritableRepository<Location>
