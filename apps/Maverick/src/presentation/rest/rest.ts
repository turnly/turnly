import { Http, Versions } from '@turnly/core'

import { Routes as v1 } from './v1/Routes'

const routes = {
  [Versions.V1]: new v1().router,
}

export const rest = new Http().setRoutes(routes)
