/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IWidgetsMapper } from 'widgets/shared/domain/contratcs/widgets-mapper.interface'
import { IWidgetsWritableRepo } from 'widgets/shared/domain/contratcs/widgets-repo.interface'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

import { IWidgetDocument, WidgetModel } from '../models/widget.model'

export class WidgetsWritableRepo
  extends MongoWritableRepo<Widget, IWidgetDocument>
  implements IWidgetsWritableRepo
{
  public constructor(widgetsMapper: IWidgetsMapper<IWidgetDocument>) {
    super(WidgetModel, widgetsMapper)
  }
}
