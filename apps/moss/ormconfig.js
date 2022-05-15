const dotenv = require('dotenv');
dotenv.config();

/**
 * @type {import('typeorm').ConnectionOptions}
 */
const config = {
  type: 'postgres',
  port: parseInt(process.env.POSTGRES_PORT, 10),
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE_NAME,
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
  ssl: Boolean(process.env.TYPEORM_SSL),
  logging: ['error'],
  maxQueryExecutionTime: 2000,
  migrationsTableName: 'typeorm_migrations',
  entities: [
    'src/modules/integrations/infrastructure/persistence/models/*.ts',
    'dist/modules/integrations/infrastructure/persistence/models/*.js',
  ],
  migrations: [
    'src/modules/integrations/infrastructure/persistence/migrations/*.ts',
  ],
  subscribers: [
    'src/modules/integrations/infrastructure/persistence/subscribers/*.ts',
    'dist/modules/integrations/infrastructure/persistence/subscribers/*.js',
  ],
  cli: {
    migrationsDir:
      'src/modules/integrations/infrastructure/persistence/migrations',
    entitiesDir: 'src/modules/integrations/infrastructure/persistence/models',
  },
};

module.exports = config;
