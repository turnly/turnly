/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { IOrganizationsMapper } from 'Organizations/domain/contracts/IOrganizationsMapper'
import { Organization } from 'Organizations/domain/entities/Organization'

import {
  IOrganizationDocument,
  OrganizationModel,
} from '../models/OrganizationModel'

export class OrganizationsMapper
  implements IOrganizationsMapper<IOrganizationDocument>
{
  public toEntity(document: IOrganizationDocument): Organization {
    const { _id, ...attrs } =
      document.toObject<EntityAttributes<Organization>>()

    return Organization.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Organization): IOrganizationDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new OrganizationModel({ ...attrs, _id })
  }

  public toEntityList(documents: IOrganizationDocument[]): Organization[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Organization[]): IOrganizationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
