/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Meta } from '../../branch-management'

export class MetaMapper {
  public static toRPC(metadata: Record<string, any>): Meta {
    const meta = new Meta()

    if (metadata) {
      meta.setStatus(metadata.status)
      meta.setMessage(metadata.message ?? '')
      meta.setTitle(metadata.title ?? '')
      meta.setSuccess(Boolean(metadata.success))
      meta.setTimestamp(Number(metadata.timestamp))

      if (metadata.errors) {
        const errors = metadata.errors.map(error => {
          const exceptionMessage = new Meta.ExceptionMessage()

          exceptionMessage.setMessage(error.message)
          exceptionMessage.setParameter(String(error.parameter))

          return exceptionMessage
        })

        meta.setErrorsList(errors)
      }
    }

    return meta
  }
}
