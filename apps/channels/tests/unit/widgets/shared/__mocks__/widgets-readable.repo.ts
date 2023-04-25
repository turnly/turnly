/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'

import { Widget } from '../../../../../src/widgets/shared/domain/entities/widget.entity'

export class WidgetsReadableRepo
  extends TestReadableRepo<Widget>
  implements IReadableRepository<Widget> {}
