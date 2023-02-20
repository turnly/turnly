/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export interface IMiddleware<F = Function> {
  use(): F
}

export interface IGuard<F = Function> {
  guard(): F
}
