import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: '192.168.0.8',
  port: 5432,
  username: 'feedmescz',
  password: 'pedito123.',
  database: 'FeedMeSCZ',
  synchronize: true,
  logging: false,
  logger: 'simple-console',
  entities: ['./src/persistance/entity/*'],
  migrations: ['./src/persistance/migrations/*'],
  cli: {
    entitiesDir: './src/persistance/entity',
    migrationsDir: './src/persistance/migrations',
  },
};

export = config;
