import { Box, ioc } from '@turnly/shared'
import { LocationByIdQueryHandler } from 'Locations/application/queries'

import { LocationsController } from '../api/controllers/LocationsController'
import { LocationMapper } from '../persistence/mongo/entity-model-mappers/LocationMapper'
import { LocationReadableRepo } from '../persistence/mongo/repositories/LocationsReadableRepo'
import { LocationsWritableRepo } from '../persistence/mongo/repositories/LocationsWritableRepo'

Box.register({
  locationsMapper: ioc.asClass(LocationMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationReadableRepo).singleton(),
  locationsWritableRepo: ioc.asClass(LocationsWritableRepo).singleton(),
  locationsController: ioc.asClass(LocationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  locationByIdQueryHandler: ioc.asClass(LocationByIdQueryHandler).singleton(),
})
