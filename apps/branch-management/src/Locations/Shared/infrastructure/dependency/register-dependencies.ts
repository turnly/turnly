/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description This file is used to register dependencies to the dependency injection container.
 */
import 'Locations/SearchAvailableLocationsForServing/dependency/attach-to-dependency-box'
import 'Locations/Shared/infrastructure/persistence/dependency/attach-to-dependency-box'

/**
 * Handlers
 *
 * @description This file is used to register handlers to the bus.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { LocationsModule } from '../../../LocationsModule'

/**
 * Location module
 */
queryBus.register(LocationsModule.getQueryHandlers())
commandBus.register(LocationsModule.getCommandHandlers())
eventBus.subscribe(LocationsModule.getEventSubscribers())
