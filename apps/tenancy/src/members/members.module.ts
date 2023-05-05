/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'members/shared/shared.dependency'
import 'members/get-one-member/get-one-member.dependency'
import 'members/get-member-by-user-id/get-member-by-user-id.dependency'

import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type { Member } from 'members/shared/domain/entity/member.entity'

export class MembersModule {
  public static getServer(): Producers.Tenancy.IMembersServer {
    return {
      getOne: (...args) => Box.resolve('getOneMemberServer').execute(...args),
      getByUserId: (...args) =>
        Box.resolve('getMemberByUserIdServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Member> {
    return Box.resolve('membersWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Member> {
    return Box.resolve('membersReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('getOneMemberQueryHandler'),
      Box.resolve('getMemberByUserIdQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
