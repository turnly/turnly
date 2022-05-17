import { IntegrationsServer } from 'Integrations/api/presentation/rpc/IntegrationsServer'
import { IntegrationFactory } from 'Integrations/infrastructure/factories/IntegrationFactory'

/**
 * Servers
 */
export const integrationsServer = new IntegrationsServer(
  IntegrationFactory.getController()
)
