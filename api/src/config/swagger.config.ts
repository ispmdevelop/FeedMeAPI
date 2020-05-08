import swaggerJsdoc, { Options, SwaggerDefinition, ApiInformation } from 'swagger-jsdoc';
import { environment } from '../../environment/environment';

const privateMethods = {
  getSwaggerDefinitions(): SwaggerDefinition {
    let info: ApiInformation = {
      title: 'Feed Me',
      description: 'API of Feed Me SCZ',
      version: '1.0.0',
    };

    return {
      basePath: '/api',
      host: `localhost:3000`,
      info,
      
      // securityDefinitions: {
      //   JWT: {
      //     type: "apiKey",
      //     description: "JWT authorization of an API",
      //     name: "Authorization",
      //     in: "header"
      //   }
      // }
    };
  },
};

const options: Options = {
  swaggerDefinition: privateMethods.getSwaggerDefinitions(),
  apis: ['./src/core/swagger/*'],
};

export const specs = swaggerJsdoc(options);
