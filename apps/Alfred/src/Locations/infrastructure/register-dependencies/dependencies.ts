import { Box, ioc } from '@turnly/shared'
import { LocationByIdQueryHandler } from 'Locations/application/queries'

import { LocationsController } from '../api/controllers/LocationsController'
import { LocationMapper } from '../persistence/mongo/entity-model-mappers/LocationMapper'
import { LocationReadableRepo } from '../persistence/mongo/repositories/LocationsReadableRepo'

Box.register({
  locationsMapper: ioc.asClass(LocationMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationReadableRepo).singleton(),
  locationsController: ioc.asClass(LocationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  locationByIdQueryHandler: ioc.asClass(LocationByIdQueryHandler).singleton(),
})
