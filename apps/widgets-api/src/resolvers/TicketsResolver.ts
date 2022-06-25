import { IContext } from '@types'
import { Locations, Services, Tickets } from 'datasources'
import { TicketsMapper } from 'mappers/TicketsMapper'
import { CustomerModel } from 'models/CustomerModel'
import { LocationModel } from 'models/LocationModel'
import { ServiceModel } from 'models/ServiceModel'
import { TicketInput, TicketModel } from 'models/TicketModel'
import { GraphException } from 'shared/GraphException'
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  ID,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

@Resolver(TicketModel)
export class TicketsResolver {
  @Authorized()
  @Mutation(() => TicketModel)
  public async takeTicket(
    @Arg('input') input: TicketInput,
    @Ctx() { req: { companyId, customer } }: IContext
  ) {
    /**
     * @todo Run processors
     *
     * const {} = await Fields.runProcessors({ answers })
     */

    /**
     * @todo Validate Location status
     *
     * const {} = await Locations.isReadyForServing({ servicedId, locationId, companyId })
     */

    const { data: ticket, meta } = await Tickets.create({
      ticket: {
        serviceId: input.serviceId,
        locationId: input.locationId,
        customerId: customer.id,
        extrasList: input.extra,
        companyId,
      },
    })

    if (!ticket) throw new GraphException(meta)

    /**
     * @todo Create answers
     *
     * const {} = await Answers.create({ answers, ticketId, extra })
     */

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async announceTicket(
    @Arg('id', () => String) id: string,
    @Ctx() { req: { companyId, customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.announce({
      id,
      customerId: customer.id,
      companyId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async leaveTicket(
    @Arg('id', () => String) id: string,
    @Ctx() { req: { companyId, customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.leave({
      id,
      customerId: customer.id,
      companyId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Query(() => TicketModel)
  public async getTicket(
    @Arg('id', () => ID) id: string,
    @Ctx() { req: { companyId, customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.getOne({
      id,
      customerId: customer.id,
      companyId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @FieldResolver(() => ServiceModel)
  public async service(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId } }: IContext
  ) {
    const { data: service, meta } = await Services.getOne({
      id: ticket.serviceId,
      companyId,
    })

    if (!service) throw new GraphException(meta)

    return service
  }

  @FieldResolver(() => LocationModel)
  public async location(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId } }: IContext
  ) {
    const { data: location, meta } = await Locations.getOne({
      id: ticket.locationId,
      companyId,
    })

    if (!location) throw new GraphException(meta)

    return location
  }

  @FieldResolver(() => CustomerModel)
  public async customer(
    @Root() ticket: TicketModel,
    @Ctx() { req: { customer } }: IContext
  ) {
    return customer
  }

  @FieldResolver(() => Int)
  public async beforeYours(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId } }: IContext
  ) {
    const { dataList } = await Tickets.getTicketsBeforeYours({
      id: ticket.id,
      companyId,
      customerId: ticket.customerId,
    })

    if (!dataList?.length) return 0

    return dataList.length
  }

  @FieldResolver(() => String, { nullable: true })
  public async calledTo(@Root() _: TicketModel) {
    /**
     * @todo Implement method to get calledTo (AssignedTo -> Desk)
     */
    return null
  }
}
