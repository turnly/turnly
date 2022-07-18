/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { AnswersServer } from 'Answers/infrastructure/api/rpc'
import { AnswersFactory } from 'Answers/infrastructure/factories/AnswersFactory'
import { FieldsServer } from 'Fields/infrastructure/api/rpc'
import { FieldsFactory } from 'Fields/infrastructure/factories/FieldsFactory'

/**
 * Servers
 */
const answersServer = new AnswersServer(AnswersFactory.getController())
const fieldsServer = new FieldsServer(FieldsFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.CustomFields.AnswersService,
    implementation: answersServer.implementation,
  },
  {
    definition: Producers.CustomFields.FieldsService,
    implementation: fieldsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
