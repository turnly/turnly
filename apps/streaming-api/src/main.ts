import { Realtime } from '@turnly/realtime'
import { Channels, serverOptions } from 'config'
import { AllowConnGuard } from 'queuing/middlewares/AllowConnGuard'

const Server = new Realtime(serverOptions)

/**
 * Create a channel to listen to events
 */
const queuing = Server.listen(Channels.QUEUING)
const helpdesk = Server.listen(Channels.HELPDESK)

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
