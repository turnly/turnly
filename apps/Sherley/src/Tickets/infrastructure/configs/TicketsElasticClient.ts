import { ElasticConfig, ElasticIndexes } from '@turnly/shared'

export const TICKETS_ELASTIC_CLIENT_CONFIG: ElasticConfig = Object.freeze({
  node: process.env.ELASTICSEARCH_URI as string,
  index: {
    name: ElasticIndexes.TICKETS,
    /**
     * @todo - add mappings for tickets
     */
    configs: {},
  },
})
