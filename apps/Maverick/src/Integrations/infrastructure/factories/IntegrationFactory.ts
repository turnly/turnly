import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'

import { IIntegrationMapper } from '../../domain/contracts/IIntegrationMapper'
import { IIntegrationQueryFactory } from '../../domain/contracts/IIntegrationQueryFactory'
import { IntegrationsController } from '../api/controllers/IntegrationsController'
import { IntegrationMapper } from '../persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationReadableRepository } from '../persistence/mongo/repositories/IntegrationReadableRepository'
import { IntegrationQueryFactory } from './IntegrationQueryFactory'

export class IntegrationFactory {
  public static getMapper(): IIntegrationMapper {
    return new IntegrationMapper()
  }

  public static getReadableRepository(): IIntegrationReadableRepository {
    return new IntegrationReadableRepository(this.getMapper())
  }

  public static getQuery(): IIntegrationQueryFactory {
    return new IntegrationQueryFactory(this.getReadableRepository())
  }

  public static getController() {
    return new IntegrationsController(this.getQuery())
  }
}
