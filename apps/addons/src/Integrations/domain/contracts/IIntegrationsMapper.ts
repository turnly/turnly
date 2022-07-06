/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'

export type IIntegrationsMapper<Model> = IEntityMapper<Integration, Model>
