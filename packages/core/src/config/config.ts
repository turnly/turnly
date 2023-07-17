/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import convict from 'convict'

const config = convict({
  app: {
    name: {
      doc: 'The name of the application',
      format: String,
      default: 'turnly',
      env: 'APP_NAME',
    },
    domain: {
      doc: 'The domain of the application',
      format: String,
      default: 'turnly.local',
      env: 'APP_DOMAIN',
    },
    timeout: {
      doc: 'Maximum time it should take for a request to complete',
      format: Number,
      default: 8_000,
      env: 'HTTP_REQUEST_TIMEOUT',
    },
    batch_limit: {
      doc: 'Batch Limit',
      format: Number,
      default: 20,
      env: 'BATCH_LIMIT',
    },
  },
  auth: {
    issuer: {
      doc: 'The issuer of the JWT token',
      format: String,
      default: '',
      env: 'AUTH_ISSUER',
    },
    jwks_uri: {
      doc: 'The URI of the JWKS',
      format: String,
      default: '',
      env: 'AUTH_JWKS_URI',
    },
    tokenTypeClaim: {
      doc: 'The claim that holds the token type',
      format: String,
      default: 'https://turnly.app/token_type',
      env: 'AUTH_TOKEN_TYPE_CLAIM',
    },
  },
  server: {
    port: {
      doc: 'The port to bind to',
      format: 'port',
      default: 6024,
      env: 'APP_PORT',
    },
    payload_max_size: {
      doc: 'Maximum payload size accepted by the API. (in mb, e.g: 10mb, 23mb, 80mb)',
      format: String,
      default: '10mb',
      env: 'HTTP_PAYLOAD_MAX_SIZE',
    },
  },
  grpc: {
    port: {
      doc: 'The port to bind to',
      format: 'port',
      default: 6023,
      env: 'GRPC_PORT',
    },
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test', 'staging'],
    default: 'development',
    env: 'NODE_ENV',
  },
  mongo: {
    uri: {
      doc: 'The URI of the MongoDB instance',
      format: String,
      default: '',
      env: 'MONGO_URI',
      sensitive: true,
    },
    database: {
      doc: 'The name of the MongoDB database',
      format: String,
      default: '',
      env: 'MONGO_DB',
    },
  },
  rabbitmq: {
    uri: {
      doc: 'The URI of the RabbitMQ instance',
      format: String,
      default: '',
      env: 'RABBITMQ_URI',
      sensitive: true,
    },
    exchange: {
      doc: 'The name of the RabbitMQ exchange',
      format: String,
      default: 'turnly.ms.events.exchange',
      env: 'RABBITMQ_EXCHANGE',
    },
    queue: {
      doc: 'The name of the RabbitMQ queue',
      format: String,
      default: '',
      env: 'RABBITMQ_QUEUE',
    },
  },
  elasticsearch: {
    uri: {
      doc: 'The URI of the ElasticSearch instance',
      format: String,
      default: '',
      env: 'ELASTICSEARCH_URI',
    },
  },
  twilio: {
    sid: {
      doc: 'The SID of the Twilio account',
      format: String,
      default: '',
      env: 'TWILIO_ACCOUNT_SID',
    },
    token: {
      doc: 'The token of the Twilio account',
      format: String,
      default: '',
      env: 'TWILIO_AUTH_TOKEN',
    },
    phone_number: {
      doc: 'The phone number of the Twilio account',
      format: String,
      default: '',
      env: 'TWILIO_PHONE_NUMBER',
    },
  },
  observability: {
    db_debug: {
      doc: 'Enable debug mode for the database',
      format: Boolean,
      default: false,
      env: 'DB_DEBUG',
    },
    logger: {
      level: {
        doc: 'The level of logging to use.',
        format: ['debug', 'info', 'warn', 'error', 'verbose'],
        default: 'verbose',
        env: 'LOGGING_LEVEL',
      },
    },
  },
  encryptor: {
    algorithm: {
      doc: 'The algorithm to use for encryption.',
      format: String,
      default: 'AES-256-CTR',
      env: 'ENCRYPTION_ALGORITHM',
    },
    secret: {
      doc: 'The secret to use for encryption.',
      format: String,
      default: '',
      env: 'ENCRYPTION_SECRET',
      sensitive: true,
    },
  },
  collections: {
    limit: {
      doc: 'The limit of collections to return',
      format: Number,
      default: 20,
      env: 'COLLECTIONS_LIMIT',
    },
    max_limit: {
      doc: 'The maximum limit of collections to return',
      format: Number,
      default: 100,
      env: 'COLLECTIONS_MAX_LIMIT',
    },
    offset: {
      doc: 'The offset of collections to return',
      format: Number,
      default: 0,
      env: 'COLLECTIONS_OFFSET',
    },
  },
})

config.loadFile([`${__dirname}/config.${config.get('env')}.json`])

config.validate({ allowed: 'strict' })

export { config }
