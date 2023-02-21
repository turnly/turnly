/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum ExceptionMessages {
  UNAUTHENTICATED = 'You must be authenticated to access this resource',
  ACTION_NOT_ALLOWED = 'This action is not allowed for you',
  REQUEST_TIMEOUT = 'The server has taken longer than expected to process this request, so it has been decided to close the process',
  ALREADY_EXISTS = 'The server found a resource with these specifications',
  UNAUTHORIZED = 'You do not have permission to access this resource',
  SERVICE_UNAVAILABLE = 'The server is currently unavailable, please try again later',
  NOT_FOUND = 'The server could not find the requested resource',
  GENERIC_ERROR = 'The server not process the request due to something that is perceived to be a client error',
  TOO_MANY_REQUESTS = 'The server did not complete the processing of your request because it exceeded the allowed limit of requests. Try again soon.',
}
