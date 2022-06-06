import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryHandler } from '@turnly/shared'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketByIdQuery } from './TicketByIdQuery'

@QueryHandler(TicketByIdQuery)
export class TicketByIdQueryHandler
  implements IQueryHandler<TicketByIdQuery, Nullable<Ticket>>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketReadableRepo
  ) {}

  public async execute({ params }: TicketByIdQuery) {
    const { id, companyId } = params

    const ticket = await this.ticketsReadableRepo.getById(id)

    return ticket?.isOwnedBy(companyId) ? ticket : null
  }
}
