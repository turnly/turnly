/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Integration } from 'integrations/shared/domain/entities/integration.entity'

export type IIntegrationsMapper<Model> = IEntityMapper<Integration, Model>
