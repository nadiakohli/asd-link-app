const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDoc = (app) => {
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: `Advanced Software Development link app - ${process.env.NODE_ENV}`,
        description: 'These APIs allow to reduce long links that make your life easier during further interaction with them',
      },
      basePath: '/',
    },
    apis: [path.join(__dirname, '../routes/**/*.js')],
  };
  app.use(
    process.env.API_DOCUMENTATION_ROOT,
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc(swaggerOptions)),
  );
};

module.exports = swaggerDoc;
