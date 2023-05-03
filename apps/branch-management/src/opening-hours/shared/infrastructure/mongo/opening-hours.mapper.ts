/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IOpeningHoursMapper } from 'opening-hours/shared/domain/contracts/opening-hours-mapper.interface'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { IOpeningHourDocument, OpeningHourModel } from './opening-hours.model'

export class OpeningHoursMapper
  implements IOpeningHoursMapper<IOpeningHourDocument>
{
  public toEntity(document: IOpeningHourDocument): OpeningHour {
    const { _id, ...attrs } = document.toObject<EntityAttributes<OpeningHour>>()

    return OpeningHour.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: OpeningHour): IOpeningHourDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new OpeningHourModel({ ...attrs, _id })
  }

  public toEntityList(documents: IOpeningHourDocument[]): OpeningHour[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: OpeningHour[]): IOpeningHourDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
