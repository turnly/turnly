/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

export type ISignageDisplaysMapper<Model> = IEntityMapper<SignageDisplay, Model>
