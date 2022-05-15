import { IntegrationsServer } from 'integrations/api/presentation/rpc/integrationsServer'
import { IntegrationFactory } from 'integrations/infrastructure/factories/IntegrationFactory'

/**
 * Servers
 */
export const integrationsServer = new IntegrationsServer(
  IntegrationFactory.getController()
)
