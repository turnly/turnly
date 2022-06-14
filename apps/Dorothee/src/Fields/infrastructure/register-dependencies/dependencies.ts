import { Box, ElasticClient, ioc } from '@turnly/shared'

import { SearchCustomerFieldsByServiceQueryHandler } from '../../application/queries/FieldByServiceIdQuery'
import { FieldsController } from '../api/controllers/FieldsController'
import { FIELDS_ELASTIC_CLIENT_CONFIG } from '../configs/FieldsElasticClient'
import { FieldMapper } from '../persistence/mongo/entity-model-mappers/FieldMapper'
import { FieldReadableRepo } from '../persistence/mongo/repositories/FieldReadableRepo'
import { FieldWritableRepo } from '../persistence/mongo/repositories/FieldWritableRepo'

/**
 * Registers dependencies for the Fields repos
 */
Box.register({
  fieldsElasticClient: ioc
    .asFunction(async () =>
      new ElasticClient(FIELDS_ELASTIC_CLIENT_CONFIG).connect()
    )
    .singleton(),
})

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
