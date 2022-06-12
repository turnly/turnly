import { ElasticConfig, ElasticIndexes } from '@turnly/shared'

export const FIELDS_ELASTIC_CLIENT_CONFIG: ElasticConfig = Object.freeze({
  node: process.env.ELASTICSEARCH_URI as string,
  index: {
    name: ElasticIndexes.FIELDS,
    /**
     * @todo - add mappings for fields
     */
    configs: {},
  },
})
