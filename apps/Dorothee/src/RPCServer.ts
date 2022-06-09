import { Producers } from '@turnly/rpc'
import { AnswersServer } from 'Answers/infrastructure/api/rpc'
import { AnswerFactory } from 'Answers/infrastructure/factories/AnswerFactory'

/**
 * Servers
 */
export const answersServer = new AnswersServer(AnswerFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Dorothee.AnswersService,
    implementation: answersServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
