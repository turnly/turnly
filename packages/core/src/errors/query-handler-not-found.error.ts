/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class QueryHandlerNotFoundError extends Error {
  constructor(queryId: string) {
    super(`The query handler for the "${queryId}" query was not found!`)
  }
}
