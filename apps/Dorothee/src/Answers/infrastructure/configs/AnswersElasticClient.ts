import { ElasticConfig, ElasticIndexes } from '@turnly/shared'

export const ANSWERS_ELASTIC_CLIENT_CONFIG: ElasticConfig = Object.freeze({
  node: process.env.ELASTICSEARCH_URI as string,
  index: {
    name: ElasticIndexes.ANSWERS,
    /**
     * @todo - add mappings for fields
     */
    configs: {},
  },
})
