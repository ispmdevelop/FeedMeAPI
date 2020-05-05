import "reflect-metadata";
import AppServer from './src/server';

const server = new AppServer();
server.start(3000);