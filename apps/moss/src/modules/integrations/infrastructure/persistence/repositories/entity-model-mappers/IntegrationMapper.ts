import { Mapper, TEntityManager } from '@turnly/core'
import { Integration } from 'modules/integrations/domain/entities/Integration'
import { IIntegrationMapper } from 'modules/integrations/infrastructure/contracts/IIntegrationMapper'
import type { Repository } from 'typeorm'

import { IntegrationModel } from '../../models/Integration'

export class IntegrationMapper extends Mapper implements IIntegrationMapper {
  private readonly model: Repository<IntegrationModel>

  public constructor(manager?: TEntityManager) {
    super(manager)

    this.model = this.manager.getRepository(
      IntegrationModel
    ) as unknown as Repository<IntegrationModel>
  }

  public toEntity(model: IntegrationModel): Integration {
    return Integration.create({ ...model })
  }

  public toModel(entity: Integration): IntegrationModel {
    return this.model.create({ ...entity })
  }

  public toEntityList(models: IntegrationModel[]): Integration[] {
    return models?.map(model => this.toEntity(model))
  }

  public toModelList(entities: Integration[]): IntegrationModel[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
