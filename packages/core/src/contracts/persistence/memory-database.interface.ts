/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export interface IMemoryDatabase {
  set(key: string, value: string): void
  forget(key: string): void
  get(key: string): Promise<string>
  flush(): Promise<void>
  close(): Promise<void>
}
