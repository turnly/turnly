import { IContext } from '@types'
import { Services, Tickets } from 'datasources'
import { ServiceModel } from 'models/ServiceModel'
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  ID,
  Int,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

@Resolver(ServiceModel)
export class ServicesResolver {
  @Authorized()
  @Query(() => [ServiceModel])
  public async getLocationServices(
    @Arg('locationId', () => ID) locationId: string,
    @Ctx() { req: { companyId } }: IContext
  ) {
    const services = (
      await Services.findByLocation({
        locationId,
        companyId,
      })
    ).dataList

    if (!services) return []

    return services
  }

  @FieldResolver(() => Int)
  public async ticketsWaiting(
    @Root() service: ServiceModel,
    @Ctx() { req: { companyId, customer } }: IContext
  ): Promise<number> {
    const services = (
      await Tickets.getTicketsWaitingForService({
        serviceIdsList: [service.id],
        companyId,
        customerId: customer.id,
      })
    ).dataList

    if (!services.length) return 0

    return services[0].ticketsList.length
  }
}
