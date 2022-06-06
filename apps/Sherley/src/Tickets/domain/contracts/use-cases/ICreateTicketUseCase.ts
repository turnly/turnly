import { IUseCase } from '@turnly/shared'
import { CreateTicketCommandPayload } from 'Tickets/application/commands/CreateTicketCommand'

import { Ticket } from '../../entities/Ticket'

export type ICreateTicketUseCase = IUseCase<CreateTicketCommandPayload, Ticket>
