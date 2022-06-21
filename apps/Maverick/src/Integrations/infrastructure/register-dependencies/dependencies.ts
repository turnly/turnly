import { Box, ioc } from '@turnly/shared'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { IntegrationsMapper } from 'Integrations/infrastructure/persistence/mongo/entity-model-mappers/IntegrationsMapper'
import { IntegrationsReadableRepo } from 'Integrations/infrastructure/persistence/mongo/repositories/IntegrationsReadableRepo'

import { IntegrationsController } from '../api/controllers/IntegrationsController'

Box.register({
  integrationsMapper: ioc.asClass(IntegrationsMapper).singleton(),
  integrationsReadableRepo: ioc.asClass(IntegrationsReadableRepo).singleton(),
  integrationsController: ioc.asClass(IntegrationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  integrationByIdQueryHandler: ioc
    .asClass(IntegrationByIdQueryHandler)
    .singleton(),
})
