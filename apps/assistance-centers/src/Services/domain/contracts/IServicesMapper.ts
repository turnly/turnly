/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Service } from 'Services/domain/entities/Service'

export type IServicesMapper<Model> = IEntityMapper<Service, Model>
