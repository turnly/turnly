import { IEntityMapper } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'

export type IAgentsMapper<Model> = IEntityMapper<Agent, Model>
