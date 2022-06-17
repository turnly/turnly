import { Box, ioc } from '@turnly/shared'

import { SearchCustomerFieldsByServiceQueryHandler } from '../../application/queries/SearchCustomerFieldsByServiceQuery'
import { FieldsController } from '../api/controllers/FieldsController'
import { FieldMapper } from '../persistence/mongo/entity-model-mappers/FieldMapper'
import { FieldReadableRepo } from '../persistence/mongo/repositories/FieldReadableRepo'
import { FieldWritableRepo } from '../persistence/mongo/repositories/FieldWritableRepo'

Box.register({
  fieldsMapper: ioc.asClass(FieldMapper).singleton(),
  fieldsReadableRepo: ioc.asClass(FieldReadableRepo).singleton(),
  fieldsWritableRepo: ioc.asClass(FieldWritableRepo).singleton(),
  fieldsController: ioc.asClass(FieldsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  searchCustomerFieldsByServiceQueryHandler: ioc
    .asClass(SearchCustomerFieldsByServiceQueryHandler)
    .singleton(),
})
