const fastify = require('fastify');
const db = require('./plugin/database');
const testRoute = require('./route/tempTestRoute');
const swaggerPg = require('./plugin/swagger');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(db);
  app.register(swaggerPg);

  app.register(testRoute, { prefix: 'api/v1/test' });

  app.get('/', async (request, reply) => {
    reply.code(200).send({
      hello: 'world! done CI CD',
    });
  });

  return app;
};

module.exports = build;
