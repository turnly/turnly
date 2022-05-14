import { Http, Versions } from '@turnly/core'

import { RoutesV1 } from './v1'

const routes = {
  [Versions.V1]: new RoutesV1().router,
}

export const http = new Http().setRoutes(routes)
