import { BaseRoutes, RequestDecorator, RequestHandler } from '@turnly/shared'
import { NextFunction, Request, Response as ExpressResponse } from 'express'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

import { TicketsController } from '../../controllers/TicketsController'

export class TicketsRoutes extends BaseRoutes {
  public constructor(private readonly ticketsController: TicketsController) {
    super()

    this.setup()
  }

  public override setup(): void {
    this.router.route('/').post((...args) => this.takeTicket(...args))
  }

  @RequestHandler()
  private async takeTicket(
    req: Request,
    _res: ExpressResponse,
    _next: NextFunction
  ) {
    const { customerId, locationId, serviceId, companyId, extra } =
      new RequestDecorator<CreateTicketPayload>(req).toData()

    return await this.ticketsController.take({
      customerId,
      locationId,
      serviceId,
      companyId,
      extra,
    })
  }
}
