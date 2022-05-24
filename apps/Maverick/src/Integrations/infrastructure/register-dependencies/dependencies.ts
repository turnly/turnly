/**
 * Integrations module
 */
import { Box, ioc } from '@turnly/core'
import { IntegrationsController } from 'Integrations/infrastructure/api/controllers/IntegrationsController'
import { IntegrationMapper } from 'Integrations/infrastructure/persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationReadableRepository } from 'Integrations/infrastructure/persistence/mongo/repositories/IntegrationReadableRepository'

/**
 * Register the Integrations
 */
Box.register({
  integrationsMapper: ioc.asClass(IntegrationMapper).singleton(),
  integrationsReadableRepository: ioc
    .asClass(IntegrationReadableRepository)
    .singleton(),
  integrationsController: ioc.asClass(IntegrationsController).singleton(),
})
