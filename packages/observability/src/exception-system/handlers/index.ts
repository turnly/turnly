/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ActionNotAllowedHandler } from './action-not-allowed.handler'
import { BadRequestHandler } from './bad-request.handler'
import { ConflictHandler } from './conflict.handler'
import { InputValidatorHandler } from './input-validator.handler'
import { InvalidStateHandler } from './invalid-state.handler'
import { RequestTimeoutHandler } from './request-timeout.handler'
import { ResourceAlreadyExistsHandler } from './resource-already-exists.handler'
import { ResourceNotFoundHandler } from './resource-not-found.handler'
import { TooManyRequestsHandler } from './too-many-requests.handler'
import { UnauthenticatedHandler } from './unauthenticated.handler'
import { UnauthorizedHandler } from './unauthorized.handler'
import { UnprocessableHandler } from './unprocessable.handler'

export const handlers = [
  new UnauthenticatedHandler(),
  new UnauthorizedHandler(),
  new InputValidatorHandler(),
  new ResourceNotFoundHandler(),
  new BadRequestHandler(),
  new UnprocessableHandler(),
  new ConflictHandler(),
  new ResourceAlreadyExistsHandler(),
  new ActionNotAllowedHandler(),
  new RequestTimeoutHandler(),
  new InvalidStateHandler(),
  new TooManyRequestsHandler(),
]

export { RequestTimeoutHandler }
