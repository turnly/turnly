/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export abstract class EnvironmentArranger {
  public abstract arrange(): Promise<void>

  public abstract close(): Promise<void>
}
