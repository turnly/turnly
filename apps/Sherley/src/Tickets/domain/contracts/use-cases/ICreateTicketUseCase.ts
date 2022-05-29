import { IUseCase } from '@turnly/shared'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

import { Ticket } from '../../entities/Ticket'

export type ICreateTicketUseCase = IUseCase<CreateTicketPayload, Ticket>
