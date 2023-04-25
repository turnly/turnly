/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GraphException } from '@turnly/graph'
import { TicketsMapper } from 'datasources/tickets.mapper'
import { AnswerModel } from 'models/answer.model'
import { CustomerModel } from 'models/customer.model'
import { FieldModel } from 'models/field.model'
import { LocationModel } from 'models/location.model'
import { ServiceModel } from 'models/service.model'
import { FindTicketsByLocationArgs, TicketModel } from 'models/ticket.model'
import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  ID,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

import { IContext } from '../context.type'
import { Tickets } from '../datasources'

@Resolver(TicketModel)
export class TicketsResolver {
  @Authorized()
  @Query(() => [TicketModel])
  public async find(
    @Args()
    { searchQuery, locationId, status, serviceIds }: FindTicketsByLocationArgs,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.tickets.find({
      searchQuery,
      locationId,
      status,
      serviceIds,
    })
  }

  @Authorized()
  @Query(() => TicketModel)
  public async getTicket(
    @Arg('id', () => ID) id: string,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.tickets.getDetails(id)
  }

  @FieldResolver(() => AnswerModel)
  public async answers(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.answers.findAnswers({
      entityType: 'customer',
      extra: [{ key: 'ticketId', value: ticket.id }],
    })
  }

  @FieldResolver(() => ServiceModel)
  public async service(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.services.getOne(ticket.serviceId)
  }

  @FieldResolver(() => FieldModel)
  public async fields(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.fields.findCustomerFieldsByService(
      ticket.serviceId
    )
  }

  @FieldResolver(() => LocationModel)
  public async location(
    @Root() ticket: TicketModel,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.locations.getOne(ticket.locationId)
  }

  @FieldResolver(() => CustomerModel)
  public async customer(@Root() _: TicketModel) {
    return null
  }

  @Authorized()
  @Mutation(() => TicketModel)
  public async callTicket(
    @Arg('ticketId', () => ID) id: string,
    @Arg('agentId', () => ID) agentId: string,
    @Ctx() _ctx: IContext
  ) {
    const { data: ticket, meta } = await Tickets.call({ id, agentId })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }
}
