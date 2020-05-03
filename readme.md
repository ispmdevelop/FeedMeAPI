# API For FeedMe suite of applications

## Run Project

Configure ormconfig.json with postgresql for database conection
Configure api/src/config/global.config.ts like this:
export default {
SESSION_KEY: 'foo',
BCRYPT_SALT_ROUNDS: barNumber, //this is a number
};

run `npm install`

finally run:
``` npm run dev ```
