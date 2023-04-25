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
import 'widgets/shared/dependency/attach-to-dependency-box'
import 'widgets/get-one-widget/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
import type { Widget } from 'widgets/shared/domain/entities/widget.entity'

export class WidgetsModule {
  public static getServer(): Producers.Channels.IWidgetsServer {
    return {
      getOne: (...args) => Box.resolve('getOneWidgetServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Widget> {
    return Box.resolve('widgetsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Widget> {
    return Box.resolve('widgetsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneWidgetQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
