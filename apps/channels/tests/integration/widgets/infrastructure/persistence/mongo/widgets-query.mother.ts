/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Widget } from '../../../../../../src/widgets/shared/domain/entities/widget.entity'

export class WidgetsQueryMother {
  static getOneWith(widget: Widget) {
    const { id, organizationId } = widget.toObject()

    return new QueryBuilder<Widget>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(widgets: Widget[]) {
    const ids = widgets.map(widget => widget.toObject().id)

    return new QueryBuilder<Widget>().in('id', ids).getMany(0, ids.length)
  }
}
