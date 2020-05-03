# API For FeedMe suite of applications

## Run Project

Configure ormconfig.ts with postgresql for database conection like this:

```
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: env.host,
  port: env.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
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
```

Configure api/src/config/global.config.ts like this:

export default {  
SESSION_KEY: 'foo',  
BCRYPT_SALT_ROUNDS: barNumber, //this is a number  
};

Run
`npm install`
`npm run dev`
