import { InMemoryQueryBus, IQueryBus } from '@turnly/core'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'

import { IIntegrationMapper } from '../../domain/contracts/IIntegrationMapper'
import { IntegrationsController } from '../api/controllers/IntegrationsController'
import { IntegrationMapper } from '../persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationReadableRepository } from '../persistence/mongo/repositories/IntegrationReadableRepository'

export class IntegrationFactory {
  public static getMapper(): IIntegrationMapper {
    return new IntegrationMapper()
  }

  public static getReadableRepository(): IIntegrationReadableRepository {
    return new IntegrationReadableRepository(this.getMapper())
  }

  public static getQueryBus(): IQueryBus {
    return new InMemoryQueryBus().registerHandler([
      new IntegrationByIdQueryHandler(this.getReadableRepository()),
    ])
  }

  public static getController() {
    return new IntegrationsController(this.getQueryBus())
  }
}
