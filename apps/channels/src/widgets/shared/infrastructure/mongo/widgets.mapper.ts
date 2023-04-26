/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IWidgetsMapper } from 'widgets/shared/domain/contratcs/widgets-mapper.interface'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

import { IWidgetDocument, WidgetModel } from './widget.model'

export class WidgetsMapper implements IWidgetsMapper<IWidgetDocument> {
  public toEntity(document: IWidgetDocument): Widget {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Widget>>()

    return Widget.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Widget): IWidgetDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new WidgetModel({ ...attrs, _id })
  }

  public toEntityList(documents: IWidgetDocument[]): Widget[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Widget[]): IWidgetDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
