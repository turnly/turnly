/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'

export type IAgentsMapper<Model> = IEntityMapper<Agent, Model>
