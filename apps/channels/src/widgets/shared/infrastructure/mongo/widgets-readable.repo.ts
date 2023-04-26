/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IWidgetsMapper } from 'widgets/shared/domain/contratcs/widgets-mapper.interface'
import { IWidgetsReadableRepo } from 'widgets/shared/domain/contratcs/widgets-repo.interface'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

import { IWidgetDocument, WidgetModel } from './widget.model'

export class WidgetsReadableRepo
  extends MongoReadableRepo<Widget, IWidgetDocument>
  implements IWidgetsReadableRepo
{
  public constructor(widgetsMapper: IWidgetsMapper<IWidgetDocument>) {
    super(WidgetModel, widgetsMapper)
  }
}
