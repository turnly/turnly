import { FieldsServer } from 'Fields/infrastructure/api/presentation/rpc'
import { FieldFactory } from 'Fields/infrastructure/factories/FieldFactory'

/**
 * Servers
 */
export const fieldsServer = new FieldsServer(FieldFactory.getController())
