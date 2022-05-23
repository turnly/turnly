import { EventBus, InMemoryCommandBus, InMemoryQueryBus } from '@turnly/core'
/**
 * Inversion of Control container for the application.
 */
import * as ioc from 'awilix'
/**
 * Integrations module
 */
import { IntegrationsController } from 'Integrations/infrastructure/api/controllers/IntegrationsController'
import { IntegrationMapper } from 'Integrations/infrastructure/persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationReadableRepository } from 'Integrations/infrastructure/persistence/mongo/repositories/IntegrationReadableRepository'

const box = ioc.createContainer({
  injectionMode: ioc.InjectionMode.CLASSIC,
})

/**
 * Register the infrastructure services
 */
box.register({
  queryBus: ioc.asFunction(() => new InMemoryQueryBus()).singleton(),
  commandBus: ioc.asFunction(() => new InMemoryCommandBus()).singleton(),
  eventBus: ioc.asFunction(() => new EventBus()).singleton(),
})

/**
 * Register the Integrations
 */
box.register({
  integrationsMapper: ioc.asClass(IntegrationMapper).singleton(),
  integrationsReadableRepository: ioc
    .asClass(IntegrationReadableRepository)
    .singleton(),
  integrationsController: ioc.asClass(IntegrationsController).singleton(),
})

export { box }
