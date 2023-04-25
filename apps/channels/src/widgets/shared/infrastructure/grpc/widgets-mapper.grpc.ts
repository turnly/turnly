/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

export class WidgetsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Widget>> | undefined
  ): Producers.Channels.Widget {
    const widget = new Producers.Channels.Widget()

    if (entity) {
      widget.setId(entity.id)
      widget.setName(entity.name)
      widget.setOriginsList(entity.origins)
      widget.setOrganizationId(entity.organizationId)
    }

    return widget
  }
}
