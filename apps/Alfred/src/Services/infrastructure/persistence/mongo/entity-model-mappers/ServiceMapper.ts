/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { IServicesMapper } from 'Services/domain/contracts/IServicesMapper'
import { Service } from 'Services/domain/entities/Service'

import { ServiceDocument, ServiceModel } from '../models/ServiceModel'

export class ServiceMapper implements IServicesMapper<ServiceDocument> {
  public toEntity(document: ServiceDocument): Service {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Service>>()

    return Service.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Service): ServiceDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new ServiceModel({ ...attrs, _id })
  }

  public toEntityList(documents: ServiceDocument[]): Service[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Service[]): ServiceDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
