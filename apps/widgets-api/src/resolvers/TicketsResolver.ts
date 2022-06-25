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
    @Ctx() { req: { companyId, customer }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getOne(id, customer.id, companyId)
  }

  @FieldResolver(() => ServiceModel)
  public async service(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId }, dataSources }: IContext
  ) {
    return await dataSources.services.getOne(ticket.serviceId, companyId)
  }

  @FieldResolver(() => LocationModel)
  public async location(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId }, dataSources }: IContext
  ) {
    return await dataSources.locations.getOne(ticket.locationId, companyId)
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
    @Ctx() { req: { companyId }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getTicketsBeforeYours(
      ticket.id,
      ticket.customerId,
      companyId
    )
  }

  @FieldResolver(() => String, { nullable: true })
  public async calledTo(
    @Root() ticket: TicketModel,
    @Ctx() { req: { companyId }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getCalledTo(
      ticket.id,
      ticket.customerId,
      companyId
    )
  }
}
