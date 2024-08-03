const fastify = require('fastify');
const pino = require('pino');
const routes = require('./routes/purchase.route');

const server = fastify({
  logger: pino({ level: 'info' })
});

const startServer = async () => {
  try {
    server.register(routes);
    await server.listen({ port: 3000 });
    console.log(`Server is listening on port 3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
