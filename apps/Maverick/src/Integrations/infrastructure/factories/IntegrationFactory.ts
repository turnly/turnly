import { IIntegrationMapper } from '../../domain/contracts/IIntegrationMapper'
import { IIntegrationQueryFactory } from '../../domain/contracts/IIntegrationQueryFactory'
import { IntegrationsController } from '../api/controllers/IntegrationsController'
import { IntegrationMapper } from '../persistence/mongo/entity-model-mappers/IntegrationMapper'
import { IntegrationRepository } from '../persistence/mongo/repositories/IntegrationRepository'
import { IntegrationQueryFactory } from './IntegrationQueryFactory'

export class IntegrationFactory {
  public static getMapper(): IIntegrationMapper {
    return new IntegrationMapper()
  }

  public static getRepository() {
    return new IntegrationRepository(this.getMapper())
  }

  public static getQuery(): IIntegrationQueryFactory {
    return new IntegrationQueryFactory(this.getRepository())
  }

  public static getController() {
    return new IntegrationsController(this.getQuery())
  }
}
