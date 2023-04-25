/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'

export type IWidgetsMapper<Model> = IEntityMapper<Widget, Model>
