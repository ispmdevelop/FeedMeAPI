import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { createConnection, ConnectionOptions } from 'typeorm';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.config';
import ErrorHandler from './config/errorHandler.config';
import cors from 'cors';
import { ControllersConfig } from './config/controllers.config';
import * as sessions from 'client-sessions';
import * as global from './config/global.config';

class AppServer extends Server {
  tries: number = 3;

  constructor() {
    super(true);
    this.config();
  }

  private async config() {
    this.swaggerConfig();
    this.app.use(cors());
    this.configureSessions();
    this.app.use(bodyParser.json());
    this.app.use('/public', express.static(path.resolve(__dirname, "./public")));
    await this.connectToDatabase();
    this.setupControllers();
    this.app.use(ErrorHandler);
  }

  private async connectToDatabase() {
    var config: ConnectionOptions = require('../ormconfig');
    await createConnection(config);
  }

  private configureSessions() {
    this.app.use(
      sessions.default({
        cookieName: 'session',
        secret: global.default.SESSION_KEY,
        duration: 7 * 24 * 60 * 60 * 1000,
        cookie: { overwrite:true, httpOnly: false,},
      })
    );
  }

  private swaggerConfig(): void {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private setupControllers(): void {
    super.addControllers(new ControllersConfig().getControllers());
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp('Server listening on port: ' + port);
    });
  }
}

export default AppServer;
