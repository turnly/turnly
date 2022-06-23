import { IContext } from '@types'
import { Location } from 'models/Location'
import { Service } from 'models/Service'
import { Services, Tickets } from 'services'
import { Arg, Authorized, Ctx, Query, Resolver } from 'type-graphql'

@Resolver(Location)
export class LocationsResolver {
  @Authorized()
  @Query(_ => [Service])
  public async listLocationServices(
    @Arg('locationId', () => String) locationId: string,
    @Ctx() { req: { customer } }: IContext
  ): Promise<Service[]> {
    const services = (
      await Services.findByLocation({
        locationId,
        companyId: customer.companyId,
      })
    ).dataList

    if (!services) return []

    const serviceIdsList = services.map(service => service.id)

    const ticketsWaiting = (
      await Tickets.getTicketsWaitingForService({
        serviceIdsList,
        companyId: customer.companyId,
        customerId: customer.id,
      })
    ).dataList

    const response: Service[] = services.map(({ companyId: _, ...service }) => {
      const waiting = ticketsWaiting.find(srv => srv.waitingFor === service.id)
      const tickets = waiting?.ticketsList?.length ?? 0

      return {
        ...service,
        tickets,
      }
    })

    return response
  }
}
