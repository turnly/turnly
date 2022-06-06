import { Box, ioc } from '@turnly/shared'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { IntegrationMapper } from 'Integrations/infrastructure/persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationReadableRepo } from 'Integrations/infrastructure/persistence/mongo/repositories/IntegrationReadableRepo'

import { IntegrationsController } from '../api/controllers/IntegrationsController'

Box.register({
  integrationsMapper: ioc.asClass(IntegrationMapper).singleton(),
  integrationsReadableRepo: ioc.asClass(IntegrationReadableRepo).singleton(),
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
