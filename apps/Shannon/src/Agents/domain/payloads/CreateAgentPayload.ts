import { EntityAttributes } from '@turnly/shared'

import { Agent } from '../entities/Agent'

export type CreateAgentPayload = Omit<EntityAttributes<Agent>, 'id'>
