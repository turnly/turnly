/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '../queuing-system'

export class ExtraMapper {
  public static toRPC(objects: Extra.AsObject[]): Extra[] {
    return objects?.map(({ key, value }) =>
      new Extra().setKey(key).setValue(value)
    )
  }
}
