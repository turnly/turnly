import { Realtime } from '@turnly/realtime'
import { serverOptions } from 'config'
import { AllowConnGuard } from 'queuing/middlewares/AllowConnGuard'

const Server = new Realtime(serverOptions)

/**
 * Create a channel to listen to events
 */
const queuing = Server.listen('/queuing')
const helpdesk = Server.listen('/helpdesk')

/**
 * Sets up the middleware
 */
queuing.use(new AllowConnGuard().use())

queuing.subscribe([
  /**
   * @todo Add a subscriber to the channel
   */
])

helpdesk.subscribe([
  /**
   * @todo Add a subscriber to the channel
   */
])
