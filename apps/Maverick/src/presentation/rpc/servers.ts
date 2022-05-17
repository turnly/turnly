import { IntegrationsServer } from 'Integrations/infrastructure/api/presentation/rpc'
import { IntegrationFactory } from 'Integrations/infrastructure/factories/IntegrationFactory'

/**
 * Servers
 */
export const integrationsServer = new IntegrationsServer(
  IntegrationFactory.getController()
)
