/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IOrganizationsMapper } from 'organizations/shared/domain/contracts/organizations-mapper.interface'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import {
  IOrganizationDocument,
  OrganizationModel,
} from '../models/organization.model'

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
