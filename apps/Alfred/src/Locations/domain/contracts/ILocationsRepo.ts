import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Location } from '../entities/Location'

export type ILocationReadableRepo = IReadableRepository<Location>
export type ILocationWritableRepo = IWritableRepository<Location>
