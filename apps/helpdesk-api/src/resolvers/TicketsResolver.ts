/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { Tickets } from 'datasources'
import { Answers } from 'datasources'
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
    @Ctx() { req: { customer }, dataSources }: IContext
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

    const service = await dataSources.services.getOne(input.serviceId)

    const { data: ticket, meta } = await Tickets.create({
      ticket: {
        serviceId: input.serviceId,
        serviceName: service.name,
        locationId: input.locationId,
        customerId: customer.id,
        extrasList: input.extra,
      },
    })

    if (!ticket) throw new GraphException(meta)

    /**
     * Create Answers
     */
    if (!input.answers) throw new GraphException(meta)

    const answers = input.answers.map(answer => ({
      ...answer,
      entityType: 'customer',
      entityId: ticket.customerId,
      extrasList: [{ key: 'ticketId', value: ticket.id }],
    }))

    await Answers.create({ answersList: answers })

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async announceTicket(
    @Arg('id', () => String) id: string,
    @Ctx() { req: { customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.announce({
      id,
      customerId: customer.id,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async leaveTicket(
    @Arg('id', () => String) id: string,
    @Ctx() { req: { customer } }: IContext
  ) {
    const { data: ticket, meta } = await Tickets.leave({
      id,
      customerId: customer.id,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  @Authorized()
  @Query(() => TicketModel)
  public async getTicket(
    @Arg('id', () => ID) id: string,
    @Ctx() { req: { customer }, dataSources }: IContext
  ) {
    return await dataSources.tickets.getOne(id, customer.id)
  }

  @FieldResolver(() => ServiceModel)
  public async service(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.services.getOne(ticket.serviceId)
  }

  @FieldResolver(() => LocationModel)
  public async location(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.locations.getOne(ticket.locationId)
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
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.tickets.getTicketsBeforeYours(
      ticket.id,
      ticket.customerId
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
