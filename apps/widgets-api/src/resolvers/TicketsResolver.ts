import { IContext } from '@types'
import { Tickets } from 'datasources'
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
    @Ctx() { req: { organizationId, customer } }: IContext
  ) {
    /**
     * @todo Run processors
     *
     * const {} = await Fields.runProcessors({ answers })
     */

    /**
     * @todo Validate Location status
     *
     * const {} = await Locations.isReadyForServing({ servicedId, locationId, organizationId })
     */

    const { data: ticket, meta } = await Tickets.create({
      ticket: {
        serviceId: input.serviceId,
        locationId: input.locationId,
        customerId: customer.id,
        extrasList: input.extra,
        organizationId,
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
    @Ctx() { req: { organizationId, customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.announce({
      id,
      customerId: customer.id,
      organizationId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async leaveTicket(
    @Arg('id', () => String) id: string,
    @Ctx() { req: { organizationId, customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.leave({
      id,
      customerId: customer.id,
      organizationId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Query(() => TicketModel)
  public async getTicket(
    @Arg('id', () => ID) id: string,
    @Ctx() { req: { organizationId, customer }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getOne(id, customer.id, organizationId)
  }

  @FieldResolver(() => ServiceModel)
  public async service(
    @Root() ticket: TicketModel,
    @Ctx() { req: { organizationId }, dataSources }: IContext
  ) {
    return await dataSources.services.getOne(ticket.serviceId, organizationId)
  }

  @FieldResolver(() => LocationModel)
  public async location(
    @Root() ticket: TicketModel,
    @Ctx() { req: { organizationId }, dataSources }: IContext
  ) {
    return await dataSources.locations.getOne(ticket.locationId, organizationId)
  }

  @FieldResolver(() => CustomerModel)
  public async customer(
    @Root() _: TicketModel,
    @Ctx() { req: { customer } }: IContext
  ) {
    return customer
  }

  @FieldResolver(() => Int)
  public async beforeYours(
    @Root() ticket: TicketModel,
    @Ctx() { req: { organizationId }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getTicketsBeforeYours(
      ticket.id,
      ticket.customerId,
      organizationId
    )
  }

  @FieldResolver(() => String, { nullable: true })
  public async calledToDesk(
    @Root() ticket: TicketModel,
    @Ctx() { req: { organizationId }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getCalledTo(
      ticket.id,
      ticket.customerId,
      organizationId
    )
  }
}
