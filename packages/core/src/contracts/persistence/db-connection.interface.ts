/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Connection Interface
 *
 * @description Interface to be implemented by any data provider.
 * @author Turnly
 */
export interface IConnection {
  connect<T>(options?: T): Promise<void>
  close(): Promise<void>
}
