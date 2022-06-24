import { Box, ioc } from '@turnly/shared'

import { SearchCustomerFieldsByServiceQueryHandler } from '../../application/queries/SearchCustomerFieldsByServiceQuery'
import { FieldsController } from '../api/controllers/FieldsController'
import { FieldsMapper } from '../persistence/mongo/entity-model-mappers/FieldMapper'
import { FieldsReadableRepo } from '../persistence/mongo/repositories/FieldsReadableRepo'
import { FieldsWritableRepo } from '../persistence/mongo/repositories/FieldsWritableRepo'

Box.register({
  fieldsMapper: ioc.asClass(FieldsMapper).singleton(),
  fieldsReadableRepo: ioc.asClass(FieldsReadableRepo).singleton(),
  fieldsWritableRepo: ioc.asClass(FieldsWritableRepo).singleton(),
  fieldsController: ioc.asClass(FieldsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  findCustomerFieldsByServiceQueryHandler: ioc
    .asClass(SearchCustomerFieldsByServiceQueryHandler)
    .singleton(),
})
