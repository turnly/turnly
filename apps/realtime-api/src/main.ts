import { Realtime } from '@turnly/realtime'
import { Channels, serverOptions } from 'config'
import { helpdeskHandlers } from 'helpdesk/handlers'
import { queuingHandlers } from 'queuing/handlers'
import { AllowConnGuard } from 'queuing/middlewares/AllowConnGuard'
import { streamHandlers } from 'stream/handlers'

const Server = new Realtime(serverOptions)

/**
 * Create a channel to listen to events
 */
const stream = Server.listen(Channels.STREAM)
const queuing = Server.listen(Channels.QUEUING)
const helpdesk = Server.listen(Channels.HELPDESK)

/**
 * Sets up the middleware
 *
 * @todo set up the middleware for stream
 *
 * stream.use(new InternalConnGuard().use())
 *
 * Only accept connections from the internal network
 */

/**
 * Sets up the middleware
 */
queuing.use(new AllowConnGuard().use())

stream.subscribe(streamHandlers)
queuing.subscribe(queuingHandlers)
helpdesk.subscribe(helpdeskHandlers)
