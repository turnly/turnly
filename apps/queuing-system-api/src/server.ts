/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Graph } from '@turnly/graph'

import { AuthGuard as authChecker } from './auth.guard'
import { createSources, setOrganizationId } from './datasources'
import { resolvers } from './resolvers'

export const graph = new Graph({
  path: '/api/queuing-system/graph',
  schema: {
    resolvers,
    authChecker,
  },
  apollo: {
    context: ({ req, res }) => ({
      req,
      res,
      setOrganizationId,
    }),
    dataSources: () => createSources(),
  },
})
