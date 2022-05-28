import { Box, ioc } from '@turnly/shared'
import { CreateFieldCommandHandler } from 'Fields/application/commands/CreateFieldCommand'
import { SaveFieldReadingDBCommandHandler } from 'Fields/application/commands/SaveFieldReadingDBCommand'
import { FieldByIdQueryHandler } from 'Fields/application/queries'
import { CreateFieldUseCase } from 'Fields/application/use-cases/CreateFieldUseCase'

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
 * Use cases
 */
Box.register({
  createFieldUseCase: ioc.asClass(CreateFieldUseCase).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createFieldCommandHandler: ioc.asClass(CreateFieldCommandHandler).singleton(),
  saveFieldReadingDBCommandHandler: ioc
    .asClass(SaveFieldReadingDBCommandHandler)
    .singleton(),
})

/**
 * Query handlers
 */
Box.register({
  fieldByIdQueryHandler: ioc.asClass(FieldByIdQueryHandler).singleton(),
})
