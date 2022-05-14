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
    'src/packages/**/infrastructure/persistence/models/*.ts',
    'dist/packages/**/infrastructure/persistence/models/*.js',
  ],
  migrations: [
    'src/packages/**/infrastructure/persistence/migrations/*.ts',
  ],
  subscribers: [
    'src/packages/**/infrastructure/persistence/subscribers/*.ts',
    'dist/packages/**/infrastructure/persistence/subscribers/*.js',
  ],
  cli: {
    migrationsDir:
      'src/packages/**/infrastructure/persistence/migrations',
    entitiesDir: 'src/packages/**/infrastructure/persistence/models',
  },
};

module.exports = config;
