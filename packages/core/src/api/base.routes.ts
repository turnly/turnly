/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { NotImplementedError } from '@turnly/common'
import { Router } from 'express'

import { ISetup } from '../contracts/setup.interface'

export abstract class BaseRoutes implements ISetup {
  private _router = Router()

  public get router(): Router {
    return this._router
  }

  public setup() {
    throw new NotImplementedError()
  }
}
