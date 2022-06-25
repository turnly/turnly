import { Meta } from '@turnly/rpc/dist/producers/addons'
import { SharedMessages } from '@turnly/shared'
import { ApolloError } from 'apollo-server-express'

export class GraphException extends ApolloError {
  constructor(meta?: Meta.AsObject) {
    const message = meta?.message ?? SharedMessages.UNKNOWN_EXCEPTION

    super(message, String(meta?.status), meta)

    Object.defineProperty(this, 'name', { value: 'GraphException' })
  }
}
