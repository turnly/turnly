import { Producers } from '@turnly/rpc'
import { AnswersServer } from 'Answers/infrastructure/api/rpc'
import { AnswerFactory } from 'Answers/infrastructure/factories/AnswerFactory'
import { FieldsServer } from 'Fields/infrastructure/api/rpc'
import { FieldFactory } from 'Fields/infrastructure/factories/FieldFactory'

/**
 * Servers
 */
const answersServer = new AnswersServer(AnswerFactory.getController())
const fieldsServer = new FieldsServer(FieldFactory.getController())

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
  {
    definition: Producers.Dorothee.FieldsService,
    implementation: fieldsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
