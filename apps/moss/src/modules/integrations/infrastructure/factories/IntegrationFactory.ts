import { TEntityManager } from '@turnly/core'
import { IntegrationsController } from 'modules/integrations/api/controllers'
import { IIntegrationQueryFactory } from 'modules/integrations/domain/contracts/IIntegrationQueryFactory'

import { IIntegrationMapper } from '../contracts/IIntegrationMapper'
import { IntegrationMapper } from '../persistence/repositories/entity-model-mappers/IntegrationMapper'
import { IntegrationQueryFactory } from './IntegrationQueryFactory'

export class IntegrationFactory {
  public static getMapper(manager?: TEntityManager): IIntegrationMapper {
    return new IntegrationMapper(manager)
  }

  public static getQuery(manager?: TEntityManager): IIntegrationQueryFactory {
    return new IntegrationQueryFactory(this.getMapper(manager), manager)
  }

  public static getController(manager?: TEntityManager) {
    return new IntegrationsController(this.getQuery(manager))
  }
}
