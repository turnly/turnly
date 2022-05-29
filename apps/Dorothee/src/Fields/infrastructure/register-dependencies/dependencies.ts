import { Box, ioc } from '@turnly/shared'
import { FieldByIdQueryHandler } from 'Fields/application/queries'

import { FieldsController } from '../api/controllers/FieldsController'
import { FieldMapper } from '../persistence/mongo/entity-model-mappers/FieldMapper'
import { FieldReadableRepository } from '../persistence/mongo/repositories/FieldReadableRepository'
import { FieldWritableRepository } from '../persistence/mongo/repositories/FieldWritableRepository'

Box.register({
  fieldsMapper: ioc.asClass(FieldMapper).singleton(),
  fieldsReadableRepository: ioc.asClass(FieldReadableRepository).singleton(),
  fieldsWritableRepository: ioc.asClass(FieldWritableRepository).singleton(),
  fieldsController: ioc.asClass(FieldsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  fieldByIdQueryHandler: ioc.asClass(FieldByIdQueryHandler).singleton(),
})
